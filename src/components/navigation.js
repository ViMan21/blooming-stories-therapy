import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

const Navigation = ()=> {
    return(
        <navigation >
            <AppBar position="fixed">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        <Button variant="text" color="secondary" href="/">Home</Button>
                        <Button variant="text" color="secondary" href="/#/about">About</Button>
                        <Button variant="text" color="secondary" href="/#/faq">FAQ</Button>
                        <Button variant="text" color="secondary" href="https://bloomingstoriestherapy.bookafy.com/">Book Now</Button>
                </Box>
            </AppBar>
        </navigation>
)};

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`, 
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

export default Navigation;