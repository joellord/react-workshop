import React, { Component } from "react";

export default class SmallWeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    const day = new Date(this.state.dt*1000);
    const smallWeatherWidgetStyle = {
      border: "1px black solid",
      height: "75px",
      marginBottom: "5px"
    };

    return (
      <div style={smallWeatherWidgetStyle}>
        <div className="row">
          <div className="col-12">
            Weather for {day.toLocaleString(window.navigator.language, {weekday: 'long'})}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.state.temp.day}&deg;C
          </div>
        </div>
      </div>
    )
  }
}