import { createContext } from 'react';

export const userAuthContext = createContext({
    userLoggedIn: false,
    username: '',
    setUserLoggedIn: (userLoggedIn) => { },
    setUsername: (username) => { }
});