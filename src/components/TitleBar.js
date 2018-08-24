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
      <div className="row">
        <div className="col-4">
          <Link to="/">Home</Link> |
          <Link to="/inbox"> Inbox</Link>
        </div>
        <div className="col-8">
          <div className="text-right">
            <Link to="/new">Send message</Link> |
            <button onClick={this.logout}>Logout</button>
            { this.state.tokens.accessToken }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TitleBar);