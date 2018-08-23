import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MessageSummary extends Component {
  render() {
    return (
        <div className="row">
          <div className="col" style={{'font-weight': this.props.unread ? 'bold' : 'normal'}}>
            From: { this.props.from }<br/>
            Subject: { this.props.subject }<br/>
            <Link to={`/inbox/${this.props.id}`}>View</Link><br/>
          </div>
        </div>
    )
  }
}