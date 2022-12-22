
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import InfoCard from '../components/infoCard'
import StepCard from '../components/stepCard'

const HomePage = ()=> {
    const [value, setValue] = React.useState('Home');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <>
            <header className="App-header">
                <navigation className="App-navigation">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="white"
                    indicatorColor="black"
                    aria-label="secondary tabs example"
                    >
                        <Tab value="Home" label="Home" className="Tab-button"/>
                        <Tab value="About" label="About" className="Tab-button"/>
                    </Tabs>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="white"
                    indicatorColor="black"
                    aria-label="secondary tabs example"
                    >
                        <Tab value="FAQ" label="FAQ" className="Tab-button"/>
                        <Tab value="Booking" label="Booking" className="Tab-button"/>
                    </Tabs>
                </navigation>
                
            </header>
            <body className="App-body">
                <Typography className="slogan" variant="h2" color="white">
                    Blooming into a Better You    
                </Typography>
                <Typography className="summary" variant="h5" color="white">
                    Do you feel stuck? You may feel overwhelmed and confused about what’s going on right now. But the one thing you know is that you want this to change. You want to understand yourself better and get back on track for the life that you want. In therapy, you will be able to explore your past, work on the present, and allow your story to bloom for the future.
                </Typography>
                <Typography className="slogan" variant="h3" color="white">
                    Areas of Focus    
                </Typography>
                <cards className="cards">
                    {InfoCard('Intergenerational Trauma', 'Trauma passed down from previous generations (that can appear in your life as symptoms of anxiety, depression, and stress)')}
                    {InfoCard('Anxiety', 'Feelings of nervousness, panic, fear, and overthinking')}
                    {InfoCard('Depression', 'Feeling helpless, irritable, having negative thoughts, and losing interest in pleasurable activities')}
                    {InfoCard('Life Transitions', 'Changes that may impact your life in a significant way')}
                    {InfoCard('Interpersonal Relationships', 'Dynamics between family members, friends, and significant others')}
                    {InfoCard('Self-Esteem', 'Your opinions and beliefs about yourself')}
                </cards>

                <Typography className="slogan" variant="h3" color="white">
                    Process 
                </Typography>

                <cards className="cards">
                    {StepCard(1, 'Book a Consultation')}
                    {StepCard(2, 'Attend Sessions')}
                    {StepCard(3, 'Start Growing!')}
                </cards>
                
            </body>
        </>
)};

export default HomePage;