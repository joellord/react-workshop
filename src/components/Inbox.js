import React, { Component } from "react";
import MessageList from "./Inbox/MessageList";
import MessageDetails from "./Inbox/MessageDetails";
import { Route } from "react-router-dom";

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container inbox" style={{border: '1px red'}}>
        <div className="row">
          <div className="col-4">
            <MessageList></MessageList>
          </div>
          <div className="col-8">
            <Route
                path={this.props.match.url + '/:id'}
                component={MessageDetails}
            />
          </div>
        </div>
      </div>
    )
  }
}
