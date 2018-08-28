import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../utils/Store";
import Auth from "../utils/Auth";

class TitleBar extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
    this.logout = this.logout.bind(this);
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

  logout() {
    let auth = new Auth();
    auth.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">GIF Messenger</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inbox">Inbox</Link>
            </li>
          </ul>
        </div>

        <div className="mr-sm-2">
          <Link to="/new">
            <button type="button" className="btn btn-primary">+</button>
          </Link>
        </div>

        {this.state.isLoggedIn && 
        <div className="mr-sm-2">
          <button type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
        </div>
        }
      </nav>
    )
  }
}

export default withRouter(TitleBar);