import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        borderRadius: '4px',
        padding: '2rem 2rem',
        minHeight: '10vh'
    },
    message: {

    }
}));

export const FeedbackMessage = ({ message }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Typography variant='h5' color='primary' className={classes.message}>
                {message}
            </Typography>
        </Grid>
    );
}