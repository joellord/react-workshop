import React, { Component } from "react";
import Auth from "../utils/Auth";
import { withRouter } from "react-router-dom";

class Callback extends Component {
  componentWillMount() {
    const auth = new Auth();
    auth.handleAuth(() => {
      this.props.history.push("/weather");
    });
  }

  render() {
    return (
      <div>Reticulating splines...</div>
    )
  }
}

export default withRouter(Callback);