// App.js
import React from 'react';
import './styling/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;