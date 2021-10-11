import React, { useState, useEffect } from "react";
import Form from "./Form";
import youtube from "../supports/youtube";
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import searchByKeyword from "../supports/searchByKeyword";



function MainPage(props) { 
  const [state, setState] = useState({
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
    searchResult: {},
  });
  useEffect(() => {
    let response = {};
      const getStorage = async () => {
        response = await localStorage.getItem("youtube_scraper_key");
  
        if (response) {
          try{
            response = await JSON.parse(response);
            setState({
              searchResult: { items: response.searchResult.items },
              tags: response.searchResult.items[0].snippet.tags,
              title: response.searchResult.items[0].snippet.title,
              channelTitle: response.searchResult.items[0].snippet.channelTitle,
              views: response.searchResult.pageInfo.totalResults,
            });
          }
          catch{
            console.log("No cached data..")
          }
         
        } else console.log("No cached data..");
      };
      getStorage();
  }, []);

  const handleSubmit = async (term) => {
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
      setState({ ...state, searchResult: searchResult });
      await localStorage.setItem(
        "youtube_scraper_key",
        JSON.stringify({ ...state, searchResult: searchResult })
      );
    }

    const response = await youtube(term);
    if (response.items[0]) {
      setState({
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

  
    return (
      <div style={{ margin: "2px" }}>
        <Form handleFormSubmit={handleSubmit} key={state.tags} />
        <RelatedVideos videos={state.searchResult.items} {...props} />
      </div>
    );
}

export default MainPage;
