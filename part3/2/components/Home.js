import React, { Component } from "react";
import Auth from "../utils/Auth";

export default class Home extends Component {
  login() {
    const auth = new Auth();
    auth.login();
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