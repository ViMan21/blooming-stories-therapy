
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';
import InfoCard from '../components/infoCard';
import StepCard from '../components/stepCard';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import step1 from '../img/step1.png';
import step2 from '../img/step2.png';
import step3 from '../img/step3.png';
import Depression from '../img/depression.png';
import IR from '../img/IR.png';
import IT from '../img/IT.png';
import SE from '../img/SE.png';
import Transitions from '../img/transitions.png';
import Anxiety from '../img/anxiety.png';
import logo from '../img/logo.png'
import homeImage from '../img/homeImage.jpg';

const HomePage = ()=> {
    return(
        <>
            <header className="App-header">
                {Navigation()}
            </header>
            <body className="App-body">
                
                <img className='logo' src={logo} alt="logo" />
                <Typography className="slogan" variant="h1" color="primary.contrastText">
                    Blooming Stories Therapy  
                </Typography>
                <Typography className="slogan" variant="h3" color="primary.contrastText"  sx={{my: 3}}>
                    Bloom into a Better You    
                </Typography>
                <img className='home-image' src={homeImage} alt="homeImage" />
                <Box className='summary-box' 
                    sx={{
                        backgroundColor: 'primary.main',
                        p: '5vw'
                    }}>
                    <Typography className="summary" variant="h4" color="secondary.main">
                        Do you feel stuck? You may feel overwhelmed and confused about what’s going on right now. But the one thing you know is that you want this to change. You want to understand yourself better and get back on track for the life that you deserve. In therapy, you will be able to explore your past, work on the present, and allow your story to bloom for the future.
                    </Typography>
                </Box>
                <Typography className="slogan" variant="h2" color="primary.contrastText" sx={{my: 3}}>
                    Areas of Focus    
                </Typography>
                <cards className="cards">
                    {InfoCard('Intergenerational Trauma', 'Trauma passed down from previous generations. This may appear in your life as symptoms of anxiety, depression, and stress.)', IT)}
                    {InfoCard('Anxiety', ' Feelings of nervousness, panic, fear, and overthinking, when there is no real threat/concern.', Anxiety)}
                    {InfoCard('Depression', 'Constantly feeling helpless, irritable, having negative thoughts, and losing interest in pleasurable activities.', Depression)}
                    {InfoCard('Life Transitions', 'Normal changes that may impact your life in a significant way. These changes can result in feelings of confusion, overwhelmedness, and stress.', Transitions)}
                    {InfoCard('Interpersonal Relationships', 'Dynamics between family members, friends, and significant others. Interpersonal problems include lack of trust, unhealthy boundaries, and ineffective communication. ', IR)}
                    {InfoCard('Self-Esteem', 'Your opinions and beliefs about yourself. Signs of low self-esteem include being overly critical about yourself, focusing on your faults, and thinking you are not enough.', SE)}
                </cards>

                <Box className='summary-box' 
                    sx={{
                        backgroundColor: 'primary.main',
                        p: '5vw',
                        my: 5
                    }}>
                    <Typography className="slogan" variant="h2" color="secondary.main" sx={{my: 3}}>
                        Process of Therapy
                    </Typography>

                    <Typography className="summary" variant="h4" color="secondary.main" sx={{my: 3 }}>
                        We are all trying our best but changes, mistakes, and unexpected hardships can be difficult to navigate on our own. Blooming Stories Therapy aims to meet you where you are when it comes to your life and concerns. It can be daunting to even acknowledge our own challenges, so I’m glad that you are starting to take the first step into creating some meaningful change in your life by seeking therapy.
                    </Typography>

                    <cards className="step-cards">
                        {StepCard(1, 'Book a Consultation', step1)}
                        {StepCard(2, 'Attend Sessions', step2)}
                        {StepCard(3, 'Start Growing!', step3)}
                    </cards>
                </Box>
                <LoadingButton
                    size="large"
                    color='secondary'
                    href="https://bloomingstoriestherapy.bookafy.com/"
                    target="_blank"
                    loadingPosition="start"
                    startIcon={<EventAvailableIcon />}
                    variant='contained'
                    sx={{ my: 5}}
                    >
                    Book a Free Consultation
                </LoadingButton>
            </body>
            {Footer()}
        </>
)};

export default HomePage;