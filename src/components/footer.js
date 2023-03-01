import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import logo from '../img/logo.png'
import { Typography, Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = ()=> {
    const [value, setValue] = React.useState('Home');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <footer className="App-footer">
            <contact>
                <Typography>Get in Touch!</Typography>
                <Link
                underline="none"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                info@bloomingstoriestherapy.com
                </Link>
                <Link
                component="button"
                underline="none"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                (289) 278-8792
                </Link>
                <Link
                component="button"
                underline="none"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                Book a Free Consultation
                </Link>
            </contact>
            <img className='logo' src={logo} alt="logo" />
        </footer>
)};

export default Footer;