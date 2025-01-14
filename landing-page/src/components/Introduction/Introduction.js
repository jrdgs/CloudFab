// Body.js
import React from 'react';
import './Introduction.css';
import CADModel from '../../images/CADSolidworks.png';
import CADMachine from '../../images/CADMachine.png';
import CADPart from '../../images/CADPart.png';
import UIMyFiles from '..//../images/My Files Page.png';
import UIEditPage from '..//../images/Editting Page.png';
import ArrowImg from '..//../images/right-arrow.svg';
import '../../pages/HomePage/HomePage.css';

export default function Body () {
    return ( 
        <div className="BackgroundContainer">
            <h1 className="AppText">
                <p className="WelcomeText">Welcome to your <span className='WelcomeDigitalText'>digital</span> makerspace.</p>
                <p className="SecondaryWelcomeText">Save money on high quality machined parts for low-volume production</p>
            </h1>

            <div className='UICards'>
                <div className='MyFilesUI'>
                    <img className='MyFilesUIImage' src={UIMyFiles} alt=''></img>
                </div>
                <div className='EditPageUI'>
                    <img className='EditPageUIImage' src={UIEditPage} alt=''></img>
                </div>
            </div>

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
                This is how it will work
            </div>
        </div>
    )
}