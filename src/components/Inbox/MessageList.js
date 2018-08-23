import React, { Component } from "react";
import MessageSummary from "./MessageSummary";
import { getMessages } from "../../utils/MessagesAPI";
import store from "../../utils/Store";

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.updateState = this.updateState.bind(this);
  }

  getInitialState() {
    return store.getGlobalState()
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
    getMessages();
  }

  render() {
    const messages = this.state.messages.map(msg => {
      return (
          <MessageSummary {...msg} />
      )
    });

    return (
      <div>
        { messages }
      </div>
    )
  }
}