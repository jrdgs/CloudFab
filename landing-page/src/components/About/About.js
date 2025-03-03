// About.js
import React, { useState, useEffect } from 'react';
import './About.css';
import '../../pages/HomePage/HomePage.css';
import StockPhoto from '..//../images/CADMachine.png';
import { Tabs, Tab } from '@mui/material';

function MakeButton(question) {
    return (
        <Tab value={question} label={question} sx={{fontFamily:"Montserrat", color: 'white', '&.Mui-selected': {color: 'var(--primary-color)',}}}>
        </Tab>
    );
}


export default function About() {
    let question_dictionary = new Map();
    question_dictionary.set('Who we are', "We are a passionate team of engineers who have experienced firsthand the challenges of accessing affordable, high-quality fabrication tools for low-volume manufacturing. Whether for personal projects, university research, or startup prototypes, traditional machining options have been expensive, slow, and inaccessible. That’s why we created CloudFab—an innovative platform that empowers engineers, makers, and businesses to access CNC manufacturing at a fraction of the cost of traditional job shops and online machining services. Our mission is simple: to break down barriers in manufacturing and give creators the tools they need to bring their ideas to life.");  
    question_dictionary.set('What makes us different', "Most online manufacturing services provide parts from a 3D model, but at a steep price and with little control. We believe engineers and makers in 2025 deserve better. CloudFab puts the power of manufacturing directly into your hands, allowing you to interact with and control the tools you use. Our platform bridges the gap between digital design and physical production, enabling you to iterate faster, reduce costs, and achieve professional-grade results—all without relying on expensive middlemen. Whether you’re a hobbyist, a startup, or an established company, CloudFab makes high-precision manufacturing accessible, affordable, and truly yours.");  
    question_dictionary.set('What services we offer', "Right now, we’re revolutionizing CNC milling and turning, making these essential fabrication methods more cost-effective and accessible. But we’re just getting started. In the near future, CloudFab will expand to offer a full suite of advanced manufacturing services, including 3D printing, sheet metal fabrication, tube bending, laser cutting, and more. Our goal is to become the go-to platform for engineers, makers, and businesses seeking high-quality, on-demand fabrication—without the traditional hassle or high costs.");  


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
                <div className='AboutLeftSide'>
                    <Tabs size='large' value={question} onChange={handleChange} variant="fullWidth" orientation={screenWidth < 600 ? 'vertical' : 'horizontal'}
                    sx={{
                        width:"40vw",
                        
                        '@media screen and (max-width: 600px)': {
                            width: "80vw",
                            '.MuiTabs-indicator': {
                                left: 0,
                            }
                        }
                    }} 
                    TabIndicatorProps={{style:{backgroundColor: 'var(--primary-color)',},}}>
                        {MakeButton('Who we are')}
                        {MakeButton('What makes us different')}
                        {MakeButton('What services we offer')}
                    </Tabs>
                    <div className='Answer'>{answer}</div>
                </div>
                <div className='AboutRightSide'>
                    <img className='StockPhoto' src={StockPhoto} alt=''></img>
                </div>
            </div>
        </div>
    );
}