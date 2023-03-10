import * as React from 'react';
import logo from '../img/logo.png'
import { Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import footerLink from './footerLink';

const Footer = ()=> {
    return(
        <footer className="App-footer">
            <contact className="footer-contact">
                <Typography variant="body1"  color="secondary.main">Get in Touch!</Typography>
                {footerLink('  info@bloomingstoriestherapy.com', 'google.ca', <EmailOutlinedIcon  color="secondary.main"/>)}
                {footerLink('  (289) 278-8792', 'google.ca', <LocalPhoneIcon  color="secondary.main"/>)}
                {footerLink('  Book a Free Consultation', 'google.ca', <CalendarMonthIcon  color="secondary.main"/>)}
            </contact>
            <company className="footer-company">
                <img className='footer-logo' src={logo} alt="logo" />
            </company>
            <virtual className="footer-virtual">
                <Typography variant='h2' className='center' color="secondary.main">
                    <ImportantDevicesIcon  color="secondary.main" fontSize='inherit'/>
                </Typography>
                <Typography  variant="body2"  color="secondary.main">
                    Virtual Therapy Available Across Ontario
                </Typography>
            </virtual>
            <Typography className='footer-copyright'  variant="body2"  color="secondary.main" sx={{m: 2}}>
                    Copyright © 2022 Blooming Stories Therapy - All Rights Reserved
            </Typography>
        </footer>
)};

export default Footer;