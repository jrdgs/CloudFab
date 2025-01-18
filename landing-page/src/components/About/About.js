// About.js
import React from 'react';
import './About.css';
import '../../pages/HomePage/HomePage.css';
import Collapsible from 'react-collapsible';

function CollapsibleTitle (content) {
    return (
        <div className='CollapsibleTitle'>
            <div>{content}</div>
            <div className='Arrow'>▼</div>
        </div>
    )
}

export default function About () {
    return ( 
        <div className="BackgroundContainer" id="about">
            <h1>About Us</h1>

            <div className='Collapsibles'>
                <Collapsible trigger={CollapsibleTitle("Who are we:")}>
                    <div className='CollapsibleText'> We are a small team of engineers that are frustrated by the lack of 
                        access to fabrication tools and machines for personal projects, university projects, startup ideas, 
                        and prototyping generally. </div>
                </Collapsible>
                <Collapsible trigger={CollapsibleTitle("What makes us different:")}>
                    <div className='CollapsibleText'> Other companies will provide parts from a 3D model at a high cost, but we believe that engineers 
                        and makers in 2024 are capable of much more. Through the CloudFab platform, we allow engineers to interface 
                        directly with the tools they are using, putting the power of manufacturing back into your hands and saving 
                        you money at the same time. </div>
                </Collapsible>
                <Collapsible trigger={CollapsibleTitle("What services we offer:")}>
                    <div className='CollapsibleText'> Currently, we are working toward offering a browser-based CAM solution for CNC milling and CNC turning. 
                        In the future, we plan to offer a full range of fabrication and manufacturing services including 3D printing, 
                        sheet metal fabrication, tube bending and much, much more. </div>
                </Collapsible>
            </div>
        </div>
    )
}