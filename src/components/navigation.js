import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import logo from '../img/logo.png'

const Navigation = ()=> {
    const [value, setValue] = React.useState('Home');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <navigation className="App-navigation">
            <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary.contrastText"
            indicatorColor="primary.contrastText"
            aria-label="secondary tabs example"
            >
                <Tab value="Home" label="Home" className="Tab-button" href="/"/>
                <Tab value="About" label="About" className="Tab-button" href="/About"/>
            </Tabs>
            <img className='logo' src={logo} alt="logo" />
            <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary.contrastText"
            indicatorColor="black"
            aria-label="secondary tabs example"
            >
                <Tab value="FAQ" label="FAQ" className="Tab-button" href="/FAQ"/>
                <Tab value="Booking" label="Book Now" className="Tab-button" href="https://bloomingstoriestherapy.bookafy.com/schedule/?type=iframe&custom_embed=true&selected_staff=shanuja-manoratnam-2592&category_id=quick-call-5ac453&locale=en"/>
            </Tabs>
        </navigation>
)};

export default Navigation;