import React, { useState } from "react";

import Provider from '../api/Provider';
import { Home } from '../modules/home/components/Home';
import { isUserLoggedIn } from '../pages/utils/authentication.util';
import { LoginComponent } from "../modules/login/components/LoginComponent";
import { userAuthContext } from './utils/userAuthContext';

import "./App.css";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(isUserLoggedIn());
  const [username, setUsername] = useState('');

  return (
    <userAuthContext.Provider value={{ userLoggedIn, username, setUserLoggedIn, setUsername }}>
      <Provider>
        {
          userLoggedIn ? <Home /> : <LoginComponent />
        }
      </Provider>
    </userAuthContext.Provider>
  );
}

export default App;
