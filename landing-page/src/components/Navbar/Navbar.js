// Navbar.js
import React from 'react';
import './Navbar.css';
import LogoName from '../LogoName/LogoName';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InquiryForm from '../InquiryForm/InquiryForm';
import Backdrop from '@mui/material/Backdrop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ffffff',
    borderRadius: '10px',
    boxShadow: 24,
    // p: 4,
  };

export default function Navbar(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <nav className="navbar">
            <a href="\" className="navbar-logo">
                <LogoName />
            </a>
            <ul className="navbar-links">
                <li><a href="#howitworks">How it Works</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#about">About Us</a></li>
            </ul>
            <button onClick={handleOpen} className="waitlist-button">Join the Waitlist</button>
            
            
            <Modal open={open} onClose={handleClose} 
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                     timeout: 500,
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