
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Navigation from '../components/navigation';
import About from '../img/about.jpg';
import Footer from '../components/footer';
import Banner from '../components/banner';

const AboutPage = ()=> {
    return(
        <>
            {Banner('Currently Accepting New Clients')}
             <header className="App-header">
                {Navigation()}
            </header>
            <body className="App-body">
                <Typography className="slogan" variant="h1" color="primary.contrastText">
                    About Your Therapist
                </Typography>
                <Typography className="slogan" variant="h3" color="primary.contrastText">
                    Shanuja Manoratnam, Registered Psychotherapist (Qualifying) 
                </Typography>
                <div className="About-section">
                    <img src={About} className="About-image" alt="icon" />
                    <Typography className="About-text" variant="h5" color="primary.contrastText" align="left">
                    Hi! My name is Shanuja, and I am a second-generation Tamil-Canadian. Growing up, as I faced my own challenges with mental health, I would never see resources from other second-generation South Asians. I felt that I could never get professional help from someone who would truly understand where I was coming from. This pushed me to pursue my undergraduate degree in psychology and master’s degree in counseling psychology. As a Registered Psychotherapist (Qualifying), I aim to work from a culturally sensitive, integrative approach with clients to allow them to be seen, heard, and understood.
                    {<br />}{<br />}
                    Mostly, I work with young adults, who are children of immigrants, as they navigate between multiple cultures and their mental health concerns such as anxiety, depression, and self-esteem. However, I also have experience working with life transitions, interpersonal problems, trauma, stress, autism, and ADHD.
                    {<br />}{<br />}
                    Everyone is unique, so collaboratively we can create an individualized treatment plan that suits your needs. Along with your expertise on your life I hope to help navigate and take control of your mental health. During this process we can identify patterns between your thoughts and behaviours, find healthier coping strategies, and rewrite your story. Everyone deserves to be heard and understood, and I would be honoured to join you on your own mental health journey.
                    </Typography>
                </div>
            </body>
            {Footer()}
        </>
)};

export default AboutPage;