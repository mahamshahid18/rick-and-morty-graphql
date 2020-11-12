import React, { Component } from "react";

import Provider from '../api/Provider';
import PickleRick from '../components/PickleRick';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <PickleRick />
      </Provider>
    );
  }
}

export default App;
