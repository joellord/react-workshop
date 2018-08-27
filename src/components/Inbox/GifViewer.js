import React, { Component } from "react";

export default class GifViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.image || "26xBIygOcC3bAWg3S",
      caption: props.caption || "no caption provided"
    };
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    const style = {
      viewer: {
        "padding": "1px",
        "border": "1px solid #021a40",
        "backgroundColor": "#ff0",
        "position": "relative"
      },
      image: {
        "width": "100%"
      },
      caption: {
        "position": "absolute",
        "fontSize": "4em",
        "fontWeight": "bold",
        "color": "white",
        "bottom": "10px",
        "textAlign": "center",
        "width": "100%",
        "textShadow": "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
        "textTransform": "uppercase"
        }
    }

    return (
      <div class="gif-viewer" style={style.viewer}>
        <img class="gif-img" style={style.image} src={`https://media3.giphy.com/media/${this.state.image}/giphy.gif`} />
        <div class="gif-caption" style={style.caption}>
          {this.state.caption}
        </div>
      </div>
    )
  }
}