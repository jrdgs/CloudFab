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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfX2ChexWsGZ3kNe9tmR4EppJ_vjyMQ4VjyUAIFW-_FHw5T6g/formResponse";

    const formFields = {
      "entry.46311766": formData.name,
      "entry.1484693257": formData.email,
      "entry.358878111": formData.profession,
      "entry.565039414": formData.message,
    };

    const formBody = new URLSearchParams(formFields);

    try {
      const response = await fetch(googleFormURL, {
        method: 'POST',
        body: formBody.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', profession: 'hs-student', message: '' });
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="InquiryFormContainer">
      <h3 className="InquiryFormHeader">
        Interested? Get in touch with us
      </h3>
      <form className="InquiryForm" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InquiryForm;




/*// InquiryForm.js
import React from 'react';
import './InquiryForm.css';

// src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

function postToGoogle() {
  var field1 = document.getElementById("#name").value();
  var field2 = document.getElementById("#email").value();
  var field3 = document.getElementById("#profession").value();
  var field4 = document.getElementById("#message").value();

  document.getElementById.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfX2ChexWsGZ3kNe9tmR4EppJ_vjyMQ4VjyUAIFW-_FHw5T6g/formResponse",
      
    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.46311766": field1,
      "entry.1484693257": field2,
      "entry.358878111": field3,
      "entry.565039414": field4
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      document.getElementById('#contact').trigger('reset');
    },
    error: function (x, y, z) {
      document.getElementById('#contact').trigger('reset');
    }
  });
  return false;
}

function InquiryForm() {
  return (
    <div className="InquiryFormContainer">
      <h3 className="InquiryFormHeader">
        Interested? Get in touch with us
      </h3>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        className="InquiryForm"
        onsubmit="return postToGoogle();"
      >
        <input type="hidden" name="form-name" value="contact" id='contact'/>
        
        <label>
          <p className="FormLabel">Name:</p>
          <input type="text" name="entry.46311766" id='name' required />
        </label>
        
        <label>
          <p className="FormLabel">Email:</p>
          <input type="email" name="entry.1484693257" id='email' required />
        </label>

        <label>
          <p className="FormLabel">Profession:</p>
          <select id="profession" name="entry.358878111">
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
          <input type='text' name='entry.565039414' id='message'/>
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InquiryForm;*/