import Typography from '@mui/material/Typography';
import * as React from 'react';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';

const Banner = (message)=> {
    return(
        <div class="banner">
            <Typography variant="body2" color="primary.main" sx={{ fontWeight:700, fontSize:'1rem' }}>
                <FilterVintageTwoToneIcon sx={{ verticalAlign:'bottom' }}/>
                {message}
                <FilterVintageTwoToneIcon sx={{ verticalAlign:'bottom' }}/>
            </Typography>
        </div>
)};

export default Banner;