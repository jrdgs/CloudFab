// About.js
import React from 'react';
import './Benefits.css';

export default function Benefits () {
    return ( 
        <div className="BackgroundContainer" id="benefits">
            <div className="BenefitsLine">
                <div className="BenefitCard">
                    <h1>Save Money</h1>
                    <p>Save up to 50% compared to other online machine shops by programming your own job.</p>
                </div>
                <div className="BenefitCard">
                    <h1>Full Control</h1>
                    <p>Take full control of your part from the stock, to the fixturing, to the pathing.</p>
                </div>
            </div>
            <div className="BenefitsLine">
                <div className="BenefitCard">
                    <h1>Instant Feedback</h1>
                    <p>Get instant feedback on the manufacturability of your design, how much it will cost, and what is driving those</p>
                </div>
                <div className="BenefitCard">
                    <h1>Quick Turnaround</h1>
                    <p>Get your parts fast with on demand, automated manufacturing capability</p>
                </div>
            </div>
        </div>
    )
}
