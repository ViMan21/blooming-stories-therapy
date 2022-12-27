
import Typography from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';
import InfoCard from '../components/infoCard';
import StepCard from '../components/stepCard';
import Navigation from '../components/navigation';
import step1 from '../img/step1.png';
import step2 from '../img/step2.png';
import step3 from '../img/step3.png';
import Depression from '../img/depression.png';
import IR from '../img/IR.png';
import IT from '../img/IT.png';
import SE from '../img/SE.png';
import Transitions from '../img/transitions.png';
import Anxiety from '../img/anxiety.png';

const HomePage = ()=> {
    return(
        <>
            <header className="App-header">
                {Navigation()}
            </header>
            <body className="App-body">
                <Typography className="slogan" variant="h2" color="primary.contrastText">
                    Blooming into a Better You    
                </Typography>
                <Typography className="summary" variant="h5" color="primary.contrastText">
                    Do you feel stuck? You may feel overwhelmed and confused about what’s going on right now. But the one thing you know is that you want this to change. You want to understand yourself better and get back on track for the life that you want. In therapy, you will be able to explore your past, work on the present, and allow your story to bloom for the future.
                </Typography>
                <Typography className="slogan" variant="h3" color="primary.contrastText">
                    Areas of Focus    
                </Typography>
                <cards className="cards">
                    {InfoCard('Intergenerational Trauma', 'Trauma passed down from previous generations (that can appear in your life as symptoms of anxiety, depression, and stress)', IT)}
                    {InfoCard('Anxiety', 'Feelings of nervousness, panic, fear, and overthinking', Anxiety)}
                    {InfoCard('Depression', 'Feeling helpless, irritable, having negative thoughts, and losing interest in pleasurable activities', Depression)}
                    {InfoCard('Life Transitions', 'Changes that may impact your life in a significant way', Transitions)}
                    {InfoCard('Interpersonal Relationships', 'Dynamics between family members, friends, and significant others', IR)}
                    {InfoCard('Self-Esteem', 'Your opinions and beliefs about yourself', SE)}
                </cards>

                <Typography className="slogan" variant="h3" color="primary.contrastText">
                    Process 
                </Typography>

                <cards className="cards">
                    {StepCard(1, 'Book a Consultation', step1)}
                    {StepCard(2, 'Attend Sessions', step2)}
                    {StepCard(3, 'Start Growing!', step3)}
                </cards>
                <LoadingButton
                    size="large"
                    color="secondary"
                    href="https://bloomingstoriestherapy.bookafy.com/schedule/?type=iframe&custom_embed=true&selected_staff=shanuja-manoratnam-2592&category_id=quick-call-5ac453&locale=en"
                    loadingPosition="start"
                    startIcon={<EventAvailableIcon />}
                    variant="contained"
                    sx={{ mb: 5}}
                    >
                    Book a Free Consultation Now!
                    </LoadingButton>
            </body>
        </>
)};

export default HomePage;