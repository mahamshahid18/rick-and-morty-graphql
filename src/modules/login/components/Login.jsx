import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';

import { loginUser } from '../../shared/utils';
import { userAuthContext } from '../../shared/contexts';
import { GET_USER_QUERY, ADD_USER_MUTATION } from '../../../queries';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginCard: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12)',
        borderRadius: '4px',
        padding: '5rem 3rem',
        width: '35%'
    },
    usernameInput: {
        margin: '1rem 1rem'
    },
    loginButton: {
        margin: '1rem 1rem'
    }
}));

export const Login = () => {
    const classes = useStyles();
    const [usernameInput, setUsernameInput] = useState('');
    const { setUserLoggedIn, setUsername } = useContext(userAuthContext);

    const [getUser, { loading, data }] = useLazyQuery(GET_USER_QUERY);
    const [createUserAndLogin] = useMutation(
        ADD_USER_MUTATION,
        {
            onCompleted(data) {
                if (data && data.addUser && data.addUser.username) {
                    loginUser(data.addUser.username);
                    setUserLoggedIn(true);
                }
            }
        }
    );

    useEffect(() => {
        if (!loading) {
            if (data && data.user && data.user.username) {
                loginUser(data.user.username);
                setUserLoggedIn(true);
                setUsername(data.user.username);
            } else {
                createUserAndLogin({ variables: { username: usernameInput } });
            }
        }
    }, [loading])

    const onInputChange = (event) => {
        setUsernameInput(event.target.value)
    }

    const onLoginClick = () => {
        getUser({ variables: { username: usernameInput } });
    };

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.loginCard}>
                <TextField
                    id='username-input'
                    label='Username'
                    variant='outlined'
                    fullWidth
                    value={usernameInput}
                    onChange={onInputChange}
                    className={classes.usernameInput}
                />
                <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.loginButton}
                    disabled={!usernameInput || usernameInput === ''}
                    onClick={onLoginClick}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    );
}