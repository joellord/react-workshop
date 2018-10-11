import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import store from "../utils/Store";
import Auth from "../utils/Auth";

class TitleBar extends Component {
  auth = new Auth();

  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
    this.props.history.push("/");
  }

  componentWillMount() {
    store.subscribe(this.updateState);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateState);
  }

  updateState() {
    this.setState(store.getGlobalState());
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">From Zero to App</Link>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/weather" className="nav-link">Weather Panel</Link>
            </li>
          </ul>
          <span class="navbar-text">
            {!this.state.isLoggedIn &&
            <button className="btn btn-primary" onClick={this.login}>Login</button>
            }
            {this.state.isLoggedIn &&
            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
            }
          </span>
        </div>
      </nav>
    )
  }
}

export default withRouter(TitleBar);