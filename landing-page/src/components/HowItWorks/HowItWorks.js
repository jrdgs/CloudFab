import React from 'react';
import './HowItWorks.css';
import '../../pages/HomePage/HomePage.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                <div className="UIContainer">
                    <div className="LeftSide">
                        <h1>How it works</h1>
                    </div>
                    <div className="RightSide">
                        <Timeline position="alternate-reverse" sx={{ marginTop: "100px" }}>
                            {steps.map((step, index) => (
                                <TimelineItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TimelineSeparator sx={{ height: "1in" }} >
                                        <TimelineDot variant="filled"
                                            sx={{
                                                backgroundColor: theme.palette.primary.accent,
                                                borderColor: theme.palette.primary.accent,
                                                borderWidth: 1,
                                                borderStyle: "solid"
                                            }} />
                                        {index !== steps.length - 1 && (
                                            <TimelineConnector
                                                sx={{
                                                    bgcolor: theme.palette.primary.main,
                                                }}
                                            />
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
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
};



// export default function HowItWorks() {
//     const steps = [
//         { title: "Upload your model", desc: "as a STEP from your preferred CAD software" },
//         { title: "Choose your stock", desc: "from CloudFabs available materials" },
//         { title: "Fixture your material", desc: "using CloudFabs proprietary software" },
//         { title: "Program your tool paths", desc: "using industry-standard pathing" },
//         { title: "Upload your model", desc: "as a STEP from your preferred CAD software" },
//     ];

//     return (
//         <ThemeProvider theme={theme}>
//             <div className="BackgroundContainer">
//                 <div className="UIContainer">
//                     <div className="LeftSide">
//                         <h1>How it works</h1>
//                     </div>
//                     <div className="RightSide">
//                         <Timeline position="alternate-reverse" sx={{ minHeight: '500px' }}>
//                             {steps.map((step, index) => (
//                                 <TimelineItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
//                                     <TimelineSeparator>
//                                         <TimelineDot
//                                             variant="filled"
//                                             sx={{
//                                                 backgroundColor: theme.palette.primary.main,
//                                                 borderColor: "white",
//                                                 borderWidth: 2,
//                                                 borderStyle: "solid",
//                                             }}
//                                         />
//                                         {index !== steps.length - 1 && (
//                                             <TimelineConnector
//                                                 sx={{
//                                                     bgcolor: theme.palette.primary.main,
//                                                     flexGrow: 1,
//                                                     width: '2px',
//                                                     marginTop: '10px',
//                                                 }}
//                                             />
//                                         )}
//                                     </TimelineSeparator>
//                                     <TimelineContent>
//                                         <div className="timeline-content">
//                                             <h2>{step.title}</h2>
//                                             <p>{step.desc}</p>
//                                         </div>
//                                     </TimelineContent>
//                                 </TimelineItem>
//                             ))}
//                         </Timeline>
//                     </div>
//                 </div>
//             </div>
//         </ThemeProvider>
//     );
// }
