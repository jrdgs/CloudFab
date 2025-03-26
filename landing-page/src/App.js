// App.js
import React from 'react';
import './styling/App.css';
import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Clarity from '@microsoft/clarity';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import Terms from './pages/Terms/Terms';

const projectId = "qri40t3jag";
Clarity.init(projectId); // Initialize Clarity only if consent is given

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="terms-of-service" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;