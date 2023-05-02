import { Link } from '@mui/material';
import * as React from 'react';

const footerLink = (text, link, icon)=> {
    return(
        <footerLink className="footer-link">
            {icon}
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