// App.js
import React from 'react';
import './styling/App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;