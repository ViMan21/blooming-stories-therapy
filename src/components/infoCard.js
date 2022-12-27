import Typography from '@mui/material/Typography';
import * as React from 'react';

const InfoCard = (value, description, image)=> {
    return(
        <div class="infocard">
            <div class="infocard-inner">
                <div className='infocard-front'>
                    <Typography variant="h3" color="primary.contrastText" gutterTop sx={{mt: 2}}>
                        {value}
                    </Typography>
                    <img className='image-card' src={image} alt="icon" />
                </div>
                <div className='infocard-back'>
                    <Typography variant="h4" color="primary.contrastText" sx={{m: 2}}>
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
)};

export default InfoCard;