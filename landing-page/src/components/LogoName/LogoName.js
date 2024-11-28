// LogoName.js
import React from 'react';
import './LogoName.css';
import icon from "../../images/icon.png"

export default function LogoName(){
    return (
        <div className="AppTitleContainer">
            <img src={icon} alt="CloudFab Icon" className="AppIcon" />
            <h2 className="AppTitle">
                <span className="AppTitleCloud">Cloud</span>Fab
            </h2>
        </div>
    );
}