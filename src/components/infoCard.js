import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

const InfoCard = (value, description, image)=> {
    return(
        <div class="infocard">
            <div class="infocard-inner">
                <div className='infocard-front'>
                    <Box className='inner-square' sx={{
                            backgroundColor: 'secondary.main'
                        }}>
                        <img className='image-card' src={image} alt="icon" />
                    </Box>
                </div>
                <div className='infocard-back'>
                    <Typography variant="body1" color="secondary.main" sx={{m: 2}}>
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
)};

export default InfoCard;