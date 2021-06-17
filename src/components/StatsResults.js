import React, { useEffect, useState } from "react";
import Tags from "./metrics/Tags";
import Info from "./metrics/Info";
import "./metrics/metrics.css";
import youtube from "../supports/youtube";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function StatsResults({ videoIdState, videoId }) {

  const { youtubeId } = videoIdState;
  const [state, setState] = useState({
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
    searchResult: {},
  });
  useEffect(() => {
    const result = async (youtubeId) => {
      const response = await youtube(youtubeId);
      if (response.items[0]) {
        setState({
          everything: response.items,
          tags: response.items[0].snippet.tags,
          title: response.items[0].snippet.title,
          channelTitle: response.items[0].snippet.channelTitle,
          views: response.items[0].statistics.viewCount,
        });
      } else {
        console.log("Response Error", response.items);
      }
    };
    result(youtubeId);
  }, [youtubeId]);

  return (
    <div key={videoId} className="">
      <Link to={{ pathname: "/" }}>
        <button className="flex-button">{`<- Back`}</button>
      </Link>
      <br />
      <div id="tags">
        <div className="">
          <div className="grid-container">
            <Info
              title={state.title}
              channelTitle={state.channelTitle}
              views={state.views}
            />
            <Tags tags={state.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { videoIdState } = state;
  return { videoIdState };
};

export default connect(mapStateToProps)(StatsResults);
