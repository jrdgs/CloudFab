// Body.js
import React from 'react';
import './Introduction.css';
import UIMyFiles from '..//../images/My Files Page.png';
import UIEditPage from '..//../images/Editting Page.png';
import '../../pages/HomePage/HomePage.css';

export default function Body () {
    return ( 
        <div className="BackgroundContainer">
            <div className="AppText">
                <div className='AppTextLeft'>
                    <p className="WelcomeText">Welcome to</p>
                    <p className="WelcomeText">your <span className='WelcomeDigitalText'>digital</span></p>
                    <p className="WelcomeText">makerspace.</p>
                </div>
                <p className="SecondaryWelcomeText">Save money on high quality machined parts for low-volume production</p>
            </div>

            <div className='UICards'>
                <div className='MyFilesUI'>
                    <img className='MyFilesUIImage' src={UIMyFiles} alt=''></img>
                </div>
                <div className='EditPageUI'>
                    <img className='EditPageUIImage' src={UIEditPage} alt=''></img>
                </div>
            </div>
        </div>
    )
}