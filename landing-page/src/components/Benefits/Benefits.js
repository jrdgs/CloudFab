// About.js
import React from 'react';
import './Benefits.css';

export default function Benefits() {
    return (
        <div className="BackgroundContainer" id="benefits">
            <div className="PaddingTop">
                <div className="Header">
                    <h1>Why Us?</h1>
                </div>
                <div className="BenefitsLine">
                    <div className="BenefitCard">
                        <div className='front' >
                            Save Money
                        </div>
                        <div className='back'>
                            Save up to 50% compared to other online machine shops by programming your own job.
                        </div>
                    </div>
                    <div className="BenefitCard">
                        <div className='front' >
                            Full Control
                        </div>
                        <div className='back' >
                            Take full control of your part from the stock, to the fixturing, to the pathing.
                        </div>
                    </div>
                </div>
                <div className="BenefitsLine">
                    <div className="BenefitCard">
                        <div className='front' >
                            Instant Feedback
                        </div>
                        <div className='back' >
                            Get instant feedback on the manufacturability of your design, how much it will cost, and what is driving those costs.
                        </div>
                    </div>
                    <div className="BenefitCard">
                        <div className='front' >
                            Quick Turnaround
                        </div>
                        <div className='back' >
                            Get your parts fast with on demand, automated manufacturing capability.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}