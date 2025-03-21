import React, { useState } from 'react';
import './InquiryForm.css';
import Clarity from '@microsoft/clarity';

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    message: '',
  });

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof (url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-16919894702/y7zSCJai_60aEK61hIQ_',
      'event_callback': callback
    });
    return false;
  }

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    Clarity.event("Form Input", { field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.profession !== "Select One") {
        // Call both workers in parallel
        const [dbResponse, emailResponse] = await Promise.all([
          // Your existing D1 database worker
          fetch('https://cloudfab.autumn-shadow-9dbb.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }),
          // New email worker
          fetch('https://mail.cloudfab.io', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          })
        ]);

        if (dbResponse.ok && emailResponse.ok) {
          setSuccessMessage('Inquiry submitted successfully. Check your email!');
          setErrorMessage('');
          setTimeout(() => setSuccessMessage(''), 5000);
          setFormData({ name: '', email: '', profession: 'hs-student', message: '' });

          gtag_report_conversion("https://www.cloudfab.io")

        } else {
          throw new Error('Failed to submit inquiry');
        }
      }
      else {
        throw new Error('Please select a profession.');
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);

      Clarity.event("Form Submission Error", { error: error.message });

      setSuccessMessage('');
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };


  return (
    <div className="InquiryFormContainer">
      <h3 className="InquiryFormHeader">Interested? Get in touch with us</h3>
      {successMessage && <div className="SuccessMessage">{successMessage}</div>}
      {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
      <form className="InquiryForm" onSubmit={handleSubmit}>
        <label>
          <p className="FormLabel">Name:</p>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          <p className="FormLabel">Email:</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          <p className="FormLabel">Profession:</p>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >

            <option value="" disabled>Select One</option>
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
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default InquiryForm;