import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { logoutUser } from '../../shared/utils';
import { userAuthContext } from '../../shared/contexts';

import { CharactersList } from '../../characters-list/components/CharactersList';

const useStyles = makeStyles(() => ({
    homeRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1f5fe'
    },
    characterListContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        minHeight: '95vh'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export const Home = () => {
    const classes = useStyles();
    const { username, setUserLoggedIn, setUsername } = useContext(userAuthContext);

    const onLogoutClick = () => {
        logoutUser();
        setUserLoggedIn(false);
        setUsername('');
    }

    return (
        <div className={classes.homeRoot}>
            <AppBar position='sticky'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6'>
                        {username}
                    </Typography>
                    <Button variant='contained' color='secondary' onClick={onLogoutClick}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.characterListContainer}>
                <CharactersList />
            </div>
        </div>
    );
}