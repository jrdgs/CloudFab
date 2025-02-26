import React, { useState, useEffect } from 'react';
import './HowItWorks.css';
import '../../pages/HomePage/HomePage.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0592f0', // Cyan blue
            secondary: '#0081d6', // Cyan blue
            accent: "#fff"
        },
    },
});

export default function HowItWorks() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Update screen width on resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const steps = [
        { title: "Upload your model", desc: "as a STEP from your preferred CAD software" },
        { title: "Choose your stock", desc: "from CloudFabs available materials" },
        { title: "Fixture your material", desc: "using CloudFabs proprietary software" },
        { title: "Program your tool paths", desc: "using industry-standard pathing" },
        { title: "Upload your model", desc: "as a STEP from your preferred CAD software" },
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className="BackgroundContainer" id="howitworks">
                <div className={`UIContainer ${screenWidth < 900 ? 'StackedLayout' : ''}`}>
                    <div className="LeftSide">
                        <h1>How it works</h1>
                    </div>
                    <div className="RightSide">
                        {screenWidth < 900 ? (
                            <div className="timeline-wrapper">
                                {steps.map((step, index) => (
                                    <div key={index} className="timeline-step">
                                        <div className="timeline-content">
                                            <h2>{step.title}</h2>
                                            <p>{step.desc}</p>
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="timeline-divider" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Timeline position="alternate" sx={{ marginTop: screenWidth < 900 ? "50px" : "100px" }}>
                                {steps.map((step, index) => (
                                    <TimelineItem key={index} className="timeline-item">
                                        <TimelineSeparator>
                                            <TimelineDot
                                                variant="filled"
                                                className={`timeline-dot ${screenWidth < 900 ? 'hidden-dot' : ''}`}
                                                sx={{
                                                    backgroundColor: theme.palette.primary.accent,
                                                    borderColor: theme.palette.primary.accent,
                                                    borderWidth: 1,
                                                    borderStyle: "solid",
                                                }}
                                            />
                                            {index !== steps.length - 1 && (
                                                <TimelineConnector sx={{ bgcolor: theme.palette.primary.main }} />
                                            )}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <div className="timeline-content">
                                                <h2>{step.title}</h2>
                                                <p>{step.desc}</p>
                                            </div>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}