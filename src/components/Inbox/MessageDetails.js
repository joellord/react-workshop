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
          { !this.state.messageLoading && 
            <div className="row">
              <div className="col-12">
                <h3>Message details</h3>
                <div className="message-headers">
                  <div className="row">
                    <div className="col-4">Id</div><div className="col-8">{this.state.message.id}</div>
                  </div>
                  <div className="row">
                    <div className="col-4">From</div><div className="col-8">{this.state.message.from}</div>
                  </div>
                  <div className="row">
                    <div className="col-4">Subject</div><div className="col-8">{this.state.message.subject}</div>
                  </div>
                </div>

                <hr/>
                <div className="row">
                  <div className="col-12">
                    <GifViewer {...this.state.message.content} />
                  </div>
                </div>

                <hr/>
                <div className="row">
                  <div className="col-12">
                    <button type="button" onClick={this.markAsUnread}>Mark As Unread</button>
                    <button type="button" onClick={this.archive}>Archive</button>
                  </div>
                </div>
              </div>
            </div>
          }

          { this.state.messageLoading && 
            <h2>Loading...</h2>
          }
        </div>
    )
  }
}