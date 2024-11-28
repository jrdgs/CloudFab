// Body.js
import React from 'react';
import './Body.css';
import InquiryForm from '../InquiryForm/InquiryForm';
import CADModel from '../../images/CADModel.png';
import CADMachine from '../../images/CADMachine.png';
import CADPart from '../../images/CADPart.png';

export default function Body () {
    return ( 
        <div className="AppBackground">
            {/* <div className="LogoDiv">
                <LogoName />
            </div> */}
            <h1 className="AppText">
                <p className="WelcomeText">Welcome to your <span className='WelcomeDigitalText'>digital</span> makerspace</p>
                <p className="SecondaryWelcomeText">Save money on high quality machined parts for low-volume production</p>
            </h1>
            <div className='IntroGallery'>
                <div className='HomeCard'>
                <div className='HomeCardText'>Upload Your Model</div>
                    <img className='HomeCardImg' src={CADModel} alt=''></img>
                </div>
                <div className='HomeCard'>
                    <div className='HomeCardText'>Program Your Part</div>
                    <img className='HomeCardImg' src={CADMachine} alt=''></img>
                </div>
                <div className='HomeCard'>
                <div className='HomeCardText'><p>Save <span className="MoneyText">$$$</span> on Quality Parts</p></div>
                    <img className='HomeCardImg' src={CADPart} alt=''></img>
                </div>
            </div>
            <InquiryForm />
        </div>
    )
}