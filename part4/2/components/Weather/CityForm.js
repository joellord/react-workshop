import React, { Component } from "react";

export default class CityForm extends Component {
  render() {
    return (
      <form className="form-inline">
          <div className="col-7"> </div>
          <div className="col-2">
            <input type="text" className="form-control mb-2 mr-sm-2" id="city" placeholder="City Name" />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary mb-2">Find the weather</button>
          </div>
      </form>
    )
  }
}