import React, { useContext } from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CharactersList } from '../../characters-list/components/CharactersList';
import { userAuthContext } from '../../../pages/utils/userAuthContext';
import { logoutUser } from '../../../pages/utils/authentication.util';

import './Home.css';

const useStyles = makeStyles(() => ({
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
        <div className="home-root">
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">
                        {username}
                    </Typography>
                    <Button variant='contained' color='secondary' onClick={onLogoutClick}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <div className="character-list-container">
                <CharactersList />
            </div>
        </div>
    );
}