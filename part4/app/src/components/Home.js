import React, { Component } from "react";
import Auth from "../utils/Auth";
import store from "../utils/Store";

export default class Home extends Component {
  auth = new Auth();

  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Hello World</h1>
          <p>This is a weather app.  So cool!</p>
        </div>
      </div>
    )
  }
}