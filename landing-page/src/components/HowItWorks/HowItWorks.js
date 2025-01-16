// About.js
import React from 'react';
import './HowItWorks.css';
import '../../pages/HomePage/HomePage.css';
import CADModel from '../../images/CADSolidworks.png';
import CADMachine from '../../images/CADMachine.png';
import CADPart from '../../images/CADPart.png';
import ArrowImg from '..//../images/right-arrow.svg';
import '../../pages/HomePage/HomePage.css';

export default function HowItWorks () {
    return ( 
        <div className='BackgroundContainer'>
            <h1 id="howitworks">How it works</h1>

            <div className='IntroGallery'>
                <div className='HomeCard'>
                    <div className='HomeCardText'>Upload Your Model</div>
                    <img className='HomeCardImg' src={CADModel} alt=''></img>
                </div>
                <div className='ArrowImg'>
                    <img src={ArrowImg} alt=''></img>
                </div>
                <div className='HomeCard'>
                    <div className='HomeCardText'>Program Your Part</div>
                    <img className='HomeCardImg' src={CADMachine} alt=''></img>
                </div>
                <div className='ArrowImg'>
                    <img src={ArrowImg} alt=''></img>
                </div>
                <div className='HomeCard'>
                    <div className='HomeCardText'><p>Save <span className="MoneyText">$$$</span> on Quality Parts</p></div>
                    <img className='HomeCardImg' src={CADPart} alt=''></img>
                </div>
            </div>
            <div className='HowItWorksText'>
                <p>Pick your stock</p>
                <p>Fixture your part</p>
                <p>Probe your stock</p>
                <p>Path your tools</p>
                <p>Simulate your job</p>
                <p>Submit for production</p>
            </div>
        </div>
    )
}