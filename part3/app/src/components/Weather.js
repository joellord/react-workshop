import React, { Component } from "react";
import LargeWeatherWidget from "./Weather/LargeWeatherWidget";
import SmallWeatherWidget from "./Weather/SmallWeatherWidget";
import { getWeatherData } from "../utils/WeatherAPI";
import store from "../utils/Store";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = store.getGlobalState();
    getWeatherData();

    this.updateState = this.updateState.bind(this);
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
    let firstThree = this.state.list.slice(1,4).map(data => {
      return (
        <div className="col-4">
          <SmallWeatherWidget {...data}/>
        </div>
      )
    });
    let lastThree = this.state.list.slice(4,7).map(data => {
      return (
        <div className="col-4">
          <SmallWeatherWidget {...data}/>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Weather for {this.state.city.name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <LargeWeatherWidget {...this.state.list[0]}/>
          </div>
        </div>

        <hr/>

        <div className="row">
          {firstThree}
        </div>

        <div className="row">
          {lastThree}
        </div>

      </div>
    )
  }
}