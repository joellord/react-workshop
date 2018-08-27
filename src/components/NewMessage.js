import React, { Component } from "react";
import { getUsers, sendMessage } from "../utils/MessagesAPI";
import store from "../utils/Store";

export default class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
    this.handleSend = this.handleSend.bind(this);
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

  componentDidMount() {
    getUsers();
    this.setState({
      to: "0",
      subject: ""
    });
  }

  handleTo(e) {
    store.updateGlobalState({to: e.target.value});
  }

  handleSubject(e) {
    store.updateGlobalState({subject: e.target.value});
  }

  handleSend() {
    store.updateGlobalState({sending: true});
    sendMessage(this.state.to, this.state.subject).then(() => {
      store.updateGlobalState({sending: false, to: "0", subject: ""});
    });
  }

  render() {
    let users = this.state.users.map(u => {
      return (
        <option key={u.id} value={u.id}>{u.name}</option>
      );
    });
    users.unshift(
      <option key="0" value="0">Select</option>
    );
    return (
      <div className="container">
        <div className="row">
          <h2>Send Message</h2>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="msgTo">To</label>
              <select className="custom-select" value={this.state.to} onChange={this.handleTo}>
                { users }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="msgSubject">Subject</label>
              <input type="text" className="form-control" id="msgSubject" value={this.state.subject} onChange={this.handleSubject} />
            </div>
            <button type="button" disabled={this.state.sending} onClick={this.handleSend} className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    )
  }
}