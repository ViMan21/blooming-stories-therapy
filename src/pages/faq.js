import Typography from '@mui/material/Typography';
import * as React from 'react';
import Navigation from '../components/navigation'
import AccordionCard from '../components/accordionCard'
import Footer from '../components/footer';
import Banner from '../components/banner';


const FaqPage = ()=> {
    return(
        <>
            {Banner('Currently Accepting New Clients')}
             <header className="App-header">
                {Navigation()}
            </header>
            <body className="App-body">
                <div className='Faq-body'>
                    <Typography className="slogan" variant="h1" color="primary.contrastText">
                        Frequently Asked Questions 
                    </Typography>
                    {AccordionCard('What can I expect from therapy?', 'Every appointment is your time to talk about your concerns and needs, and I will help support you with what we both think would be useful, regarding your situation. Through this process of self-exploration, we can identify patterns between your thoughts and behaviours, find healthier alternatives to managing your problems, and rewrite your story. As we discuss your concerns, I would like for us to think of some possible short term and long term goals that you would like to achieve both inside and outside of therapy. ')}
                    {AccordionCard('What happens during the initial phone consultation?', 'The initial phone consultation is a chance for us both to get to know each other and determine if we are a good fit to move forward with therapy. During the call you will be able to ask me any questions you may have about therapy or my approach. I will also be asking you questions about your main concern and expectations for therapy. ')}
                    {AccordionCard('How long and frequent are sessions? ', 'Each session would be approximately 50 minutes long. Initially, it is recommended to meet once a week to get a better understanding of your concerns while also building the therapeutic relationship. As we start working on your problems and seeing some change, sessions can be done bi-weekly or monthly. However, your scheduling needs would be taken into consideration and can be discussed to determine what would work best for you. ')}
                    {AccordionCard('How long does therapy take? ', 'The duration of therapy depends on your concerns, goals, and level of commitment to the therapy process. Typically therapy can take between 8 to 20 sessions. After the first few sessions, it would be easier to determine the number of sessions suitable for your needs. However, it is important to remember that meaningful change does take time.')}
                    {AccordionCard('How much does each session cost?', 'Each 50 minute session is $160.')}
                    {AccordionCard('Would my insurance cover these costs?', 'Many insurance plans do cover psychotherapy services. A receipt will be emailed to you following your appointment, which can be submitted to your insurance company, if applicable. It is recommended that you check with your insurance provider if they cover services from Register Psychotherapists (Qualifying). ')}
                </div>
            </body>
            {Footer()}
        </>
)};

export default FaqPage;