import React, { Component } from "react";
import store from "../../utils/Store";
import { getWeatherData } from "../../utils/WeatherAPI";

export default class CityForm extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateSearchTerm(e) {
    store.updateGlobalState({searchTerm: e.target.value});
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

  getNewWeather() {
    getWeatherData();
  }

  render() {
    return (
      <form className="form-inline">
          <div className="col-7"> </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="city"
              value={this.state.searchTerm}
              onChange={this.updateSearchTerm}
              placeholder="City Name" />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.getNewWeather} >Find the weather</button>
          </div>
      </form>
    )
  }
}