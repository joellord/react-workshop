import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Inbox from "./components/Inbox";
import NewMessage from "./components/NewMessage";
import UserDetails from "./components/UserDetails";

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            Menu bar
          </div>
          <Router>
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/inbox" component={Inbox} />
                <Route path="/new" component={NewMessage} />
                <Route path="/user/:id" component={UserDetails} />
                {/*<Route path="/callback" render={props => <Callback {...this.props} />} />*/}
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
