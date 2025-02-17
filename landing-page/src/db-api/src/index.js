export default {
	async fetch(request, env) {
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*", // Allow all origins or restrict to your domain
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		if (request.method === "POST") {
			try {
				const data = await request.json();
				const { name, email, profession, message } = data;

				if (!name || !email || !profession) {
					return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
				}

				// Insert into Cloudflare D1
				const stmt = env.DB.prepare(
					"INSERT INTO inquiries (name, email, profession, message) VALUES (?, ?, ?, ?)"
				);
				await stmt.bind(name, email, profession, message).run();

				return new Response(JSON.stringify({ success: true }), {
					headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
				});
			} catch (error) {
				return new Response(JSON.stringify({ error: error.message }), { status: 500 });
			}
		}

		return new Response("Method not allowed", { status: 405 });
	},
};
