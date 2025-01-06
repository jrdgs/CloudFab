// Company.js
import React from 'react';
import './Company.css';
import Boston from '../../images/boston.jpg';

export default function Company () {
    return ( 
        <div className="CompanyBackground">
            <h1>Company</h1>
            <div className='SectionLocation'>
                <img className='BostonImage' src={Boston} alt='Fenway Park'></img>
                <h1>We are located outside of Boston, MA</h1>
            </div>
        </div>
    )
}

// Company Page
// The Company page is more formal and business-oriented, often used to highlight your operations, products, services, and credibility.

// Key Sections to Include:
// Overview of Your Business

// Describe your industry, what you do, and the products/services you offer.
// Include data points, such as years in operation, number of clients, or global reach.
// Example:
// "With over 10 years of experience, we provide comprehensive IT solutions to over 500 clients worldwide."

// Locations and Contact Information