import React, { Component } from "react";
import store from "../../utils/Store";
import { getMessage, updateMessage, markAsUnread, archive } from "../../utils/MessagesAPI";
import GifViewer from "./GifViewer";

export default class MessageDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.getInitialState();

    this.updateState = this.updateState.bind(this);
    this.readNewMessage = this.readNewMessage.bind(this);
    this.markAsUnread = this.markAsUnread.bind(this);
    this.archive = this.archive.bind(this);
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

  markAsUnread() {
    markAsUnread(this.props.match.params.id);
  }

  archive() {
    archive(this.props.match.params.id);
  }

  render(match) {
    return (
        <div>
          Message details<br/>
          Id: {this.state.message.id}<br/>
          From: {this.state.message.from}<br/>
          Subject: {this.state.message.subject}<br/>
          <hr/>
          <GifViewer {...this.state.message.content} />
          <hr/>
          <button type="button" onClick={this.markAsUnread}>Mark As Unread</button>
          <button type="button" onClick={this.archive}>Archive</button>
        </div>
    )
  }
}