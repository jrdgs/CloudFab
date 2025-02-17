import React, { useState } from 'react';
import './InquiryForm.css';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: 'educator/researcher',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSuccessMessage('Inquiry email submitted successfully. Thank you!');
        setErrorMessage('');
        setTimeout(() => setSuccessMessage(''), 5000);
        setFormData({ name: '', email: '', profession: 'hs-student', message: '' });
      })
      .catch((error) => {
        setErrorMessage(`There was an error submitting the form: ${error.message}`);
        setSuccessMessage('');
        setTimeout(() => setErrorMessage(''), 5000);
      });
  };

  return (
    <div className="InquiryFormContainer">
      <h3 className="InquiryFormHeader">Interested? Get in touch with us</h3>
      {successMessage && <div className="SuccessMessage">{successMessage}</div>}
      {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
      <form
        className="InquiryForm"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
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
            <option value="educator/researcher">Educator / Researcher</option>
            <option value="professional">Professional</option>
            <option value="hs-student">Highschool Student</option>
            <option value="uni-student">University Student</option>
            <option value="hobbyist">Hobbyist</option>
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