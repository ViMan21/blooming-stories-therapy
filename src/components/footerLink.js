import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import * as React from 'react';

const footerLink = (text, link, icon)=> {
    return(
        <footerLink className="footer-link">
            <Typography variant="body2" color="secondary.main">
                {icon}
            </Typography>
            <Link
                underline="none"
                variant="body2"
                color="secondary.main"
                href={link}
                target="_blank"
                >
                {text}
            </Link>
        </footerLink>
)};

export default footerLink;