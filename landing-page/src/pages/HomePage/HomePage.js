import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Introduction from '../../components/Introduction/Introduction';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Benefits from '../../components/Benefits/Benefits';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Benefits />
      <HowItWorks />
      <About />
      <Contact />
    </div>
  );
}

export default HomePage;