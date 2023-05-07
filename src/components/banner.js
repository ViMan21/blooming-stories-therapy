import Typography from '@mui/material/Typography';
import * as React from 'react';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';

const Banner = (message)=> {
    return(
        <div class="banner">
            <Typography variant="body1" color="primary.main" sx={{ fontWeight:700 }}>
                <FilterVintageOutlinedIcon sx={{ verticalAlign:'sub' }}/>
                {message}
                <FilterVintageOutlinedIcon sx={{ verticalAlign:'sub' }} />
            </Typography>
        </div>
)};

export default Banner;