// Navbar.js
import React from 'react';
import './Navbar.css';
import LogoName from '../LogoName/LogoName';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InquiryForm from '../InquiryForm/InquiryForm';
import Backdrop from '@mui/material/Backdrop';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ffffff',
    borderRadius: '10px',
    boxShadow: 24,
  };

export default function Navbar(){
    const [open, setOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen width

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const toggleDrawer = (open) => {setDrawerOpen(open);};
    
    // Determine whether to use drawer based on screen width
    const isMobile = screenWidth <= 600;

    // Update screen width on resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <nav className="mobile-navbar">
                    <a href="\" className="navbar-logo"><LogoName /></a>
                    <IconButton
                        edge="start"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon sx={{color:'#ffffff'}}/>
                    </IconButton>
                    

                    <Drawer anchor="top" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                        <div className="mobile-drawer">
                            <a href="\" className="mobile-drawer-navbar-logo"><LogoName /></a>
                            <ul className="mobile-navbar-links">
                                <a href="#benefits"><li>Benefits</li></a>
                                <a href="#howitworks"><li>How it Works</li></a>
                                <a href="#about"><li>About Us</li></a>
                            </ul>
                            <a href="#contact"><button href="#contact" className="mobile-waitlist-button">Join the Waitlist</button></a>
                            <IconButton edge="start" onClick={() => toggleDrawer(false)}>
                                <CloseIcon sx={{color:'#ffffff'}}/>
                            </IconButton>
                        </div>
                    </Drawer>
                </nav>
            ) : 
                (
                    // Desktop Buttons
                    <nav className="dekstop-navbar">
                        <a href="\" className="navbar-logo"><LogoName /></a>
                        <ul className="navbar-links">
                            <a href="#benefits"><li>Benefits</li></a>
                            <a href="#howitworks"><li>How it Works</li></a>
                            <a href="#about"><li>About Us</li></a>
                        </ul>
                        <button onClick={handleOpen} className="waitlist-button">Join the Waitlist</button>
                
                        <Modal open={open} onClose={handleClose} 
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                    style:{backgroundColor: "rgba(0, 0, 0, 0.85)"}
                                },
                            }}
                        >
                            <Box sx={style}>
                                <InquiryForm />
                            </Box>
                        </Modal>
                    </nav>
                )
            }
      </div>
    )
}