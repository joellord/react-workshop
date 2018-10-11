import React, { Component } from "react";
import Auth from "../utils/Auth";

export default class Home extends Component {
  auth = new Auth();

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Hello World</h1>
          <p>This is a weather app.  So cool!</p>
          <p>
            {!this.auth.isAuthenticated() &&
            <button className="btn btn-primary" onClick={this.login}>Login</button>
            }
            {this.auth.isAuthenticated() &&
            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
            }
          </p>
        </div>
      </div>
    )
  }
}