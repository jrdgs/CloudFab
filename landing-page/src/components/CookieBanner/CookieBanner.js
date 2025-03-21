import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookiesClicked = localStorage.getItem('cookiesClicked');
        if (!cookiesClicked) {
            setShowBanner(true);
        }
    }, []);

    const handleGotIt = () => {
        localStorage.setItem('cookiesClicked', true);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-banner">
            <p>
                We are using essential cookies to provide you with the best experience on our site. These cookies are necessary for the basic functionality of the website and do not collect any personal or private information.
                They help us ensure smooth navigation, secure connections, and improve performance. By continuing to use our site, you consent to the use of these cookies.
            </p>
            <button onClick={handleGotIt}>Got it</button>
        </div>
    );
}
