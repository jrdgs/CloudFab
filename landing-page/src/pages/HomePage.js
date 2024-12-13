import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Body from '../components/Body/Body';
import About from '../components/About/About';
import Company from '../components/Company/Company';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Body />
      <About />
      <Company />
      <Contact />
    </div>
  );
}

export default HomePage;