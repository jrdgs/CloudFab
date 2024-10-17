// TypingText.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './styling/App.css';

function TypingText({ text }) {
  useEffect(() => {
    const modifiedText = text.replace("future", "<span class='future'>future</span>");
    
    const options = {
      strings: [modifiedText],
      typeSpeed: 90,
      loop: false,
      autoInsertCss: true,
      showCursor: true
    };

    const typed = new Typed('#typing-text', options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div className="typing-container">
      <div className="text-and-cursor">
        <span id="typing-text"></span>
      </div>
    </div>
  );
}

export default TypingText;