import React from 'react';

import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        borderRadius: '4px',
        padding: '2rem 2rem',
        minHeight: '10vh'
    },
    gridItem: {
        display: 'flex'
    },
    skeletonLoader: {
        margin: '1rem 1rem'
    }
}));

export const CardSkeletonLoader = ({ message }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.gridItem}>
                <Skeleton variant="rect" width={'20%'} height={'5vh'} className={classes.skeletonLoader} />
                <Skeleton variant="rect" width={'80%'} height={'5vh'} className={classes.skeletonLoader} />
            </Grid>
        </Grid>
    );
}