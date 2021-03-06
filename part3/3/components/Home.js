import React, { Component } from "react";
import Auth from "../utils/Auth";

export default class Home extends Component {
  auth = new Auth();

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    this.auth.login();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Hello World</h1>
          <p>This is a weather app.  So cool!</p>
          <p>
            <button className="btn btn-primary" onClick={this.login}>Login</button>
          </p>
        </div>
      </div>
    )
  }
}