import React, { Component } from "react";

export default class SmallWeatherWidget extends Component {
  render() {
    return (
      <div>
        Weather for {this.props.day}
      </div>
    )
  }
}