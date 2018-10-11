import React, { Component } from "react";
import Auth from "../utils/Auth";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {
  auth = new Auth();

  render() {
    if (this.auth.isAuthenticated()) {
      let Component = this.props.component;
      let props;
      props = { ...this.props };
      props.component = undefined;
      return (<Route {...props} render={props => <Component {...props} />} />);
    } else {
      return (<Redirect to="/unauthorized"/>);
    }
  }
}
