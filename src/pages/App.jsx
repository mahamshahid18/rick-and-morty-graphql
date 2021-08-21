import React, { Component } from "react";

import Provider from '../api/Provider';
import { Home } from '../modules/home/components/Home';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Home />
      </Provider>
    );
  }
}

export default App;
