import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { nanoid } from 'nanoid'

const AccordionCard = (question, description)=> {
    return(
        <div className='accordionCard'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={nanoid()}
                >
                    <Typography  variant="h3" color="secondary.main" >{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h5" align='left' color="secondary.main">
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
)};

export default AccordionCard;