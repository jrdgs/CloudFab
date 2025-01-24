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
            <div className='UIContainer'>   
                <div className='LeftSide'>
                    <h1>How it works</h1>
                    {/* <img className='HomeCardImg' src={CADMachine} alt=''></img> */}
                </div>
                <div className='RightSide'>
                    <div className='StepCard'>
                        <div className='StepCardLeft'>
                            <div className='Number'>1</div>
                            <div className='StepText'>Upload your model </div>
                        </div>
                        <div className='SecondaryStepText'>as a STEP from your preffered CAD software</div>
                    </div>
                    <div className='StepCard'>
                        <div className='StepCardLeft'>
                            <div className='Number'>2</div>
                            <div className='StepText'>Choose your stock </div>
                        </div>
                        <div className='SecondaryStepText'>from CloudFabs available materials</div>
                    </div>
                    <div className='StepCard'>
                        <div className='StepCardLeft'>
                            <div className='Number'>3</div>
                            <div className='StepText'>Fixture your material </div>
                        </div>
                        <div className='SecondaryStepText'>using CloudFabs proprietary software</div>
                    </div>
                    <div className='StepCard'>
                        <div className='StepCardLeft'>
                            <div className='Number'>4</div>
                            <div className='StepText'>Programs your tool paths </div>
                        </div>
                        <div className='SecondaryStepText'>using industry standard pathing</div>
                    </div>
                    <div className='StepCard'>
                        <div className='StepCardLeft'>
                            <div className='Number'>5</div>
                            <div className='StepText'>Save money on your parts </div>
                        </div>
                        <div className='SecondaryStepText'>and gets your parts made fast</div>
                    </div>
                </div>
            </div>
        </div>
    )
}