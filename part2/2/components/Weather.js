import React, { Component } from "react";
import LargeWeatherWidget from "./Weather/LargeWeatherWidget";
import SmallWeatherWidget from "./Weather/SmallWeatherWidget";

export default class Weather extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Weather for CITY</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <LargeWeatherWidget/>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <SmallWeatherWidget day="monday"/>
          </div>
          <div className="col-4">
            <SmallWeatherWidget day="tomorrow+1"/>
          </div>
          <div className="col-4">
            <SmallWeatherWidget day="tomorrow+2"/>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <SmallWeatherWidget day="tomorrow+3"/>
          </div>
          <div className="col-4">
            <SmallWeatherWidget day="tomorrow+4"/>
          </div>
          <div className="col-4">
            <SmallWeatherWidget day="tomorrow+5"/>
          </div>
        </div>

      </div>
    )
  }
}