// About.js
import React, { useState, useEffect } from 'react';
import './About.css';
import { Tabs, Tab } from '@mui/material';
import '../../pages/HomePage/HomePage.css';
import StockPhoto from '..//../images/CADMachine.png';

function MakeButton(question, answer) {
    return (
        <Tab value={question} label={question} sx={{fontFamily:"Montserrat", color: 'white', '&.Mui-selected': {color: 'var(--primary-color)',}}}>
        </Tab>
    );
}

export default function About() {
    let question_dictionary = new Map();
    question_dictionary.set('Who we are',"We are a small team of engineers that are frustrated by the lack of access to fabrication tools and machines for low volume manufacturing for machined components. This has prevented us from developing personal projects, university projects, startup ideas, and limited access prototyping generally. CloudFab will allow engineers and makers to access CNC macnufacturing at a fraction of the cost of traditional job shops and online machining servies.");
    question_dictionary.set('What makes us different',"Other companies will provide parts from a 3D model at a high cost, but we believe that engineers and makers in 2024 are capable of much more. Through the CloudFab platform, we allow users to interface directly with the tools they are using, putting the power of manufacturing back into your hands and saving you money at the same time.");
    question_dictionary.set('What services we offer',"Currently, We are focusing on enabling low cost CNC milling and turining.In the future, we plan to offer a full range of fabrication and manufacturing services including 3D printing, sheet metal fabrication, tube bending and much, much more.");
    
    const [question, setQuestion] = React.useState('Who we are');
    const [answer, setAnswer] = React.useState(question_dictionary.get('Who we are'));
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleChange = (event, newQuestion) => {
        if (newQuestion !== null) {
            setQuestion(newQuestion);
            setAnswer(question_dictionary.get(newQuestion));
        }
    };

    // Update screen width on resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="BackgroundContainerAbout" id="about">
            <div className="AboutUIContainer">
                <div className="AboutLeftSide">
                    <Tabs
                        value={question}
                        onChange={handleChange}
                        aria-label="about tabs"
                        TabIndicatorProps={{
                            style: { background: "var(--primary-color)" }
                        }}
                    >
                        <Tab value="Who we are" label="Who we are" />
                        <Tab value="What makes us different" label="What makes us different" />
                        <Tab value="What services we offer" label="What services we offer" />
                    </Tabs>
                    <p className="Answer">{answer}</p>
                </div>
                <div className="AboutRightSide">
                    <img className='StockPhoto' src={StockPhoto} alt=''></img>
                </div>
            </div>
        </div>
    );
}