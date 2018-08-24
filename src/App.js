import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Inbox from "./components/Inbox";
import NewMessage from "./components/NewMessage";
import UserDetails from "./components/UserDetails";
import TitleBar from "./components/TitleBar";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";

import PrivateRoute from "./components/PrivateRoute";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <TitleBar></TitleBar>
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/inbox" component={Inbox} />
                <PrivateRoute path="/new" component={NewMessage} />
                <PrivateRoute path="/user/:id" component={UserDetails} />
                <Route path="/callback" render={props => <Callback {...this.props} />} />
                <Route path="/unauthorized" component={Unauthorized} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
