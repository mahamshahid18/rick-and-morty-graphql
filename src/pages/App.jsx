import React, { useState } from "react";

import Provider from '../api/Provider';

import { userAuthContext } from '../modules/shared/contexts';
import { isUserLoggedIn, getLoggedInUsername } from '../modules/shared/utils';

import { Home } from '../modules/home/components/Home';
import { Login } from '../modules/login/components/Login';

import './App.css';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(isUserLoggedIn());
  const [username, setUsername] = useState(isUserLoggedIn() ? getLoggedInUsername() : '');

  return (
    <userAuthContext.Provider value={{ userLoggedIn, username, setUserLoggedIn, setUsername }}>
      <Provider>
        {
          userLoggedIn ? <Home /> : <Login />
        }
      </Provider>
    </userAuthContext.Provider>
  );
}

export default App;
