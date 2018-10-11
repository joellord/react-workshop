import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Home from "./components/Home";
import Weather from "./components/Weather";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/callback" component={Callback} />
          <Route path="/unauthorized" component={Unauthorized} />
        </div>
      </Router>
    );
  }
}

export default App;
