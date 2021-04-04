import React, { Component } from "react";
import Tags from "./metrics/Tags";
import Info from "./metrics/Info";

class Results extends Component {
  render() {
    console.log("r:", this.props);
    return (
      <div className="flex.items-container" key={this.props.etag}>
        <Tags tags={this.props.tags} />
        <Info
          title={this.props.title}
          channelTitle={this.props.channelTitle}
          views={this.props.views}
        />
      </div>
    );
  }
}

export default Results;
