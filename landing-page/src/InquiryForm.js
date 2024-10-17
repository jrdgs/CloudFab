// InquiryForm.js
import React from 'react';
import './styling/InquiryForm.css';

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
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <label>
          <span className="FormLabel">Name:</span>
          <input type="text" name="name" required />
        </label>
        
        <label>
          <span className="FormLabel">Email:</span>
          <input type="email" name="email" required />
        </label>
        
        <label>
          <span className="FormLabel">Message (optional):</span>
          <textarea name="message"></textarea>
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InquiryForm;