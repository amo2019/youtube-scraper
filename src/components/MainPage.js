import React, { Component } from "react";
import Form from "./Form";
import youtube from "../supports/youtube";
import RelatedVideos from "./RelatedVideos";
import searchByKeyword from "../supports/searchByKeyword";

class MainPage extends Component {
  state = {
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
    searchResult: {},
  };

  componentDidMount() {
    let response = {};
    const getStorage = async () => {
      response = await localStorage.getItem("youtube_scraper_key");

      if (response) {
        response = await JSON.parse(response);
        this.setState({
          searchResult: { items: response.searchResult.items },
          tags: response.searchResult.items[0].snippet.tags,
          title: response.searchResult.items[0].snippet.title,
          channelTitle: response.searchResult.items[0].snippet.channelTitle,
          views: response.searchResult.pageInfo.totalResults,
        });
      }
    };
    getStorage();
  }

  handleSubmit = async (term) => {
    const searchResult = await searchByKeyword(term).catch(function (error) {
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
      }
      this.setState({ ...this.state, searchResult: searchResult });
      const setStorage = await localStorage.setItem(
        "youtube_scraper_key",
        JSON.stringify({ ...this.state, searchResult: searchResult })
      );
    }

    const response = await youtube(term);
    if (response.items[0]) {
      this.setState({
        searchResult: response.items,
        tags: response.items[0].snippet.tags,
        title: response.items[0].snippet.title,
        channelTitle: response.items[0].snippet.channelTitle,
        views: response.items[0].statistics.viewCount,
      });
    } else {
      console.log("no response");
    }
  };
  render() {
    return (
      <div className="w-full container mx-auto my-10">
        <Form handleFormSubmit={this.handleSubmit} key={this.state.tags} />
        <RelatedVideos videos={this.state.searchResult.items} {...this.props} />
      </div>
    );
  }
}

export default MainPage;
