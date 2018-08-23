import React, { Component } from "react";
import store from "../../utils/Store";
import { getMessage, updateMessage } from "../../utils/MessagesAPI";

export default class MessageDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.getInitialState();

    this.updateState = this.updateState.bind(this);
    this.readNewMessage = this.readNewMessage.bind(this);
  }

  getInitialState() {
    return store.getGlobalState()
  }

  componentWillMount() {
    store.subscribe(this.updateState);
  }

  componentDidMount() {
    this.readNewMessage(this.props.match.params.id);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateState);
  }

  componentWillUpdate(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.readNewMessage(newProps.match.params.id);
    }
  }

  updateState() {
    this.setState(store.getGlobalState());
  }

  readNewMessage(id) {
    getMessage(id);
    updateMessage(id, {unread: false});
  }

  render(match) {
    return (
        <div>
          Message details<br/>
          Id: {this.state.message.id}<br/>
          From: {this.state.message.from}<br/>
          Subject: {this.state.message.subject}
        </div>
    )
  }
}