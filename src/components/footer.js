import * as React from 'react';
import logo from '../img/logo.png'
import { Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import footerLink from './footerLink';

const Footer = ()=> {
    return(
        <footer className="App-footer">
            <contact className="footer-contact">
                <Typography variant="body1"  color="secondary.main">Get in Touch!</Typography>
                {footerLink('info@bloomingstoriestherapy.com', 'mailto:info@bloomingstoriestherapy.com', <EmailOutlinedIcon  color="secondary"/>)}
                {footerLink('(289) 278-8792', 'tel:+12892788792', <LocalPhoneIcon  color="secondary"/>)}
                {footerLink('Book a Free Consultation', 'https://bloomingstoriestherapy.bookafy.com/', <CalendarMonthIcon  color="secondary"/>)}
                {footerLink('@BloomingStoriesTherapy', 'https://www.instagram.com/bloomingstoriestherapy/', <InstagramIcon color="secondary"/>)}
            </contact>
            <company className="footer-company">
                <img className='footer-logo' src={logo} alt="logo" />
            </company>
            <virtual className="footer-virtual">
                <Typography variant='h1' className='center' color="secondary.main">
                    <ImportantDevicesIcon  color="secondary.main" fontSize='inherit'/>
                </Typography>
                <Typography  variant="body2"  color="secondary.main">
                    Virtual Therapy
                </Typography>
                <Typography  variant="body2"  color="secondary.main">
                    Available Across
                </Typography>
                <Typography  variant="body2"  color="secondary.main">
                    Ontario
                </Typography>
            </virtual>
            <Typography className='footer-copyright'  variant="body2"  color="secondary.main" sx={{p: 2}}>
                    Copyright © 2022 Blooming Stories Therapy - All Rights Reserved
            </Typography>
        </footer>
)};

export default Footer;