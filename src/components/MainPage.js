import React, { Component } from "react";
import Form from "./Form";
import StatsResults from "./StatsResults";
import youtube from "./supports/youtube";

import searchByKeyword from "./supports/searchByKeyword";

class MainPage extends Component {
  state = {
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
    searchResult: {},
  };
  handleSubmit = async (term) => {
    const searchResult = await searchByKeyword().catch(function (error) {
      if (error.response) {
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    });
    if (searchResult) {
      for (var i in searchResult.items) {
        var item = searchResult.items[i];
        console.log("[%s] Title: %s", item.id.videoId, item);
      }
      this.setState({ ...this.state, searchResult: searchResult });
    }

    const response = await youtube(term);
    console.log("res:", response);
    if (response.items[0]) {
      this.setState({
        everything: response.items,
        tags: response.items[0].snippet.tags,
        title: response.items[0].snippet.title,
        channelTitle: response.items[0].snippet.channelTitle,
        views: response.items[0].statistics.viewCount,
      });
    } else {
      console.log(response.items);
    }
  };
  render() {
    return (
      <div className="w-full container mx-auto my-12">
        <Form handleFormSubmit={this.handleSubmit} key={this.state.tags} />
        <StatsResults
          key={this.state.searchResult.etag}
          tags={this.state.tags}
          title={this.state.title}
          channelTitle={this.state.channelTitle}
          views={this.state.views}
        />
      </div>
    );
  }
}

export default MainPage;
