import React, { Component } from "react";
import Auth from "../utils/Auth";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {
  auth = new Auth();

  render() {
    // let route = "";
    if (this.auth.isAuthenticated()) {
    //   route = (
    //     <Route {...this.props} render={()=> />
    let Component = this.props.component;
    let props;
    props = { ...this.props };
    props.component = undefined;
    return (<Route {...props} render={props => <Component {...props} />} />);
    //   )
    } else {
      //   route = (
      //       <Redirect to="/unauthorized" />
      return (<Redirect to="/unauthorized"/>);
    }
    //   );
    // }
    // return (
    //     route
    // );
  }
}
