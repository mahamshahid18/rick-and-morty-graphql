import React from 'react';

import Typography from '@material-ui/core/Typography';

export const Episode = ({ name, air_date }) => {

    return (
        <React.Fragment>
            <Typography variant='body1'>
                {name}
            </Typography>
            <Typography variant='body2'>
                {air_date}
            </Typography>
        </React.Fragment>
    );
}