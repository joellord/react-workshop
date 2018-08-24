import React, { Component } from "react";
import store from "../utils/Store";
import Auth from "../utils/Auth";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();

    this.auth = new Auth();
    this.login = this.login.bind(this);
  }

  login() {
    this.auth.login();
  };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1>GIF Messenger</h1>
              <p>
                Build a messenger application that uses GIFs to send messages.
              </p>

              {this.state.isLoggedIn && (
                  <div>
                    <div className="btn btn-danger btn-lg">
                      Logout
                    </div>
                  </div>
              )}
              {!this.state.isLoggedIn && (
                  <div className="btn btn-success btn-lg" onClick={this.login}>
                    Login
                  </div>
              )}

            </div>
          </div>
        </div>
    );
  }
}