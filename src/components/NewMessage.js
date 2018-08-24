import React, { Component } from "react";
import store from "../utils/Store";

export default class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
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

  handleTo(e) {
    store.updateGlobalState({to: e.target.value});
  }

  handleSubject(e) {
    store.updateGlobalState({subject: e.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Send Message</h2>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="msgTo">To</label>
              <input type="text" className="form-control" id="msgTo" value={this.state.to} onChange={this.handleTo} />
            </div>
            <div className="form-group">
              <label htmlFor="msgSubject">Subject</label>
              <input type="text" className="form-control" id="msgSubject" value={this.state.subject} onChange={this.handleSubject} />
            </div>
            <button type="button" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    )
  }
}