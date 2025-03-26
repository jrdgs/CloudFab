import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy">
      <iframe
        title="PrivacyPolicyFrame"
        src="/privacypolicy.html" /* Ensure the path is correct */
      ></iframe>
    </div>
  );
}

export default PrivacyPolicy;