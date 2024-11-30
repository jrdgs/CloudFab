import React, { useState } from 'react';
import './InquiryForm.css';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: 'hs-student',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', profession: 'hs-student', message: '' });
  };

  return (
    <div className="InquiryFormContainer">
      <h3 className="InquiryFormHeader">
        Interested? Get in touch with us
      </h3>
      <form 
        className="InquiryForm" 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        onSubmit={handleSubmit}
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />

        <label>
          <p className="FormLabel">Name:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <p className="FormLabel">Email:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <p className="FormLabel">Profession:</p>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="hs-student">Highschool Student</option>
            <option value="uni-student">University Student</option>
            <option value="educator/researcher">Educator / Researcher</option>
            <option value="hobbyist">Hobbyist</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <p className="FormLabel">Message (optional):</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            draggable="true"
            rows="4"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InquiryForm;
