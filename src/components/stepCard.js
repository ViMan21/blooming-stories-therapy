import Typography from '@mui/material/Typography';
import * as React from 'react';

const StepCard = (value, description)=> {
    return(
        <div  className='stepcard'>
            <Typography variant="h3" color="white" gutterBottom>
                Step {value}
            </Typography>
            <Typography variant="h4" color="white">
                {description}
            </Typography>
        </div>
)};

export default StepCard;