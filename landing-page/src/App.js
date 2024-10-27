// App.js
import React from 'react';
import TypingText from './TypingText';
import InquiryForm from './InquiryForm';
import './styling/App.css';
import icon from './images/icon.png';

function App() {
  return (
    <div className="AppBackground">
      <div className="AppTitleContainer">
        <img src={icon} alt="CloudFab Icon" className="AppIcon" />
        <h2 className="AppTitle">
          <span className="AppTitleCloud">Cloud</span>Fab
        </h2>
      </div>
      <h1 className="AppText">
        <TypingText text="the future of manufacturing is here..." />
      </h1>
      
      {}
      <InquiryForm />
    </div>
  );
}

export default App;