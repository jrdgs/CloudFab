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
    const isMobile = screenWidth <= 500;  // Example: Mobile if screen width <= 600px

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
                    <IconButton
                        edge="start"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="top"
                        open={drawerOpen}
                        onClose={() => toggleDrawer(false)}
                    >
                        <IconButton edge="start" onClick={() => toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Drawer>
                </nav>
            ) : 
                (
                    // Desktop Buttons
                    <nav className="dekstop-navbar">
                        <a href="\" className="navbar-logo"><LogoName /></a>
                        <ul className="navbar-links">
                            <li><a href="#benefits">Benefits</a></li>
                            <li><a href="#howitworks">How it Works</a></li>
                            <li><a href="#about">About Us</a></li>
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