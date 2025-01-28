// About.js
import React from 'react';
import './HowItWorks.css';
import '../../pages/HomePage/HomePage.css';

export default function HowItWorks() {
    return (
        <div className="BackgroundContainer">
            <div className="UIContainer">
                <div className="LeftSide">
                    <h1>How it works</h1>
                </div>
                <div className="RightSide">
                    <div className="timeline">
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h2>Upload your model</h2>
                                <p>as a STEP from your preferred CAD software</p>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <h2>Choose your stock</h2>
                                <p>from CloudFabs available materials</p>
                            </div>
                        </div>
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h2>Fixture your material</h2>
                                <p>using CloudFabs proprietary software</p>
                            </div>
                        </div>
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <h2>Program your tool paths</h2>
                                <p>using industry-standard pathing</p>
                            </div>
                        </div>
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <h2>Save money on your parts</h2>
                                <p>and get your parts made fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
