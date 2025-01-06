// Navbar.js
import React from 'react';
import './Navbar.css';
import LogoName from '../LogoName/LogoName';

export default function Navbar(){
    return (
        <nav className="navbar">
            <a href="\" className="navbar-logo">
                <LogoName />
            </a>
            <ul className="navbar-links">
                <li><a href="company">How it Works</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
            <button className="waitlist-button">Join the Waitlist</button>
      </nav>
    )
}