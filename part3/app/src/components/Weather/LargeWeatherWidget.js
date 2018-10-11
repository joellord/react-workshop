import React, { Component } from "react";

export default class LargeWeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [{description: ""}],
      temp: {max: 0, min: 0},
      speed: 0,
      deg: 0
    }
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    const windDirection = {
      transform: `rotate(${this.state.deg-180}deg)`
    };

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h3>Weather for today is {this.state.weather[0].description}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            Maximum of {this.state.temp.max}&deg;C<br/>
            Minimum of {this.state.temp.min}&deg;C
          </div>
          <div className="col-6">
            Winds of {this.state.speed} km/h<br/>
            <div style={ windDirection }>V</div>
          </div>
        </div>
      </div>
    )
  }
}