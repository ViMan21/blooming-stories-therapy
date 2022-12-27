import Typography from '@mui/material/Typography';
import * as React from 'react';

const StepCard = (value, description, image)=> {
    return(
        <div  className='stepcard'>
            <Typography variant="h3" color="white" gutterBottom>
                Step {value}
            </Typography>
            <img className='image-step' src={image} alt="icon" />
            <Typography variant="h4" color="white">
                {description}
            </Typography>
        </div>
)};

export default StepCard;