import Typography from '@mui/material/Typography';
import * as React from 'react';

const InfoCard = (value, description)=> {
    return(
        <div class="infocard">
            <div class="infocard-inner">
                <div className='infocard-front'>
                    <Typography variant="h3" color="white" gutterBottom>
                        {value}
                    </Typography>
                </div>
                <div className='infocard-back'>
                    <Typography variant="body2" color="white">
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
)};

export default InfoCard;