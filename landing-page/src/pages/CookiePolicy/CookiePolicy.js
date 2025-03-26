import React from 'react';
import './CookiePolicy.css';

function CookiePolicy() {
  return (
    <div className="CookiePolicy">
      <iframe
        title="CookiePolicy"
        src="/cookiepolicy.html" /* Ensure the path is correct */
      ></iframe>
    </div>
  );
}

export default CookiePolicy;