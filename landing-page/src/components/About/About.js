// About.js
import React from 'react';
import './About.css';
import '../../pages/HomePage/HomePage.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
  return (
    <div className="BackgroundContainer" id="about">
        <h1>About Us</h1>
    
        <Accordion className='AccordionClass'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className='AccordionSummaryClass'>
                Who are we:
            </AccordionSummary>
        
            <AccordionDetails className='AccordionDetailsClass'>
                We are a small team of engineers that are frustrated by the lack of 
                access to fabrication tools and machines for personal projects, university projects, startup ideas, 
                and prototyping generally.
            </AccordionDetails>
        </Accordion>
        
        <Accordion className='AccordionClass'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className='AccordionSummaryClass'>
                What makes us different:
            </AccordionSummary>
            <AccordionDetails  className='AccordionDetailsClass'>
                Other companies will provide parts from a 3D model at a high cost, but we believe that engineers 
                and makers in 2024 are capable of much more. Through the CloudFab platform, we allow engineers to interface 
                directly with the tools they are using, putting the power of manufacturing back into your hands and saving 
                you money at the same time.
            </AccordionDetails>
        </Accordion>
      
        <Accordion className='AccordionClass'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className='AccordionSummaryClass'>
                What services we offer:
            </AccordionSummary>
            <AccordionDetails className='AccordionDetailsClass'>
                In the future, we plan to offer a full range of fabrication and manufacturing services including 3D printing, 
                sheet metal fabrication, tube bending and much, much more.
            </AccordionDetails>
        </Accordion>
    </div>
  );
}