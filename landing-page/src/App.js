// App.js
import React from 'react';
import './styling/App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Clarity from '@microsoft/clarity';

const projectId = "qri40t3jag";
Clarity.init(projectId); // Initialize Clarity only if consent is given

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;