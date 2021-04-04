import React, { useEffect, useState, useContext } from "react";
import Tags from "./metrics/Tags";
import Info from "./metrics/Info";
import youtube from "../supports/youtube";
import { VideoIdContext } from "../contexts/VideoIdContext";
import { Link } from "react-router-dom";

function StatsResults(props) {
  const { videoIdChange } = useContext(VideoIdContext);
  const [state, setState] = useState({
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
    searchResult: {},
  });
  useEffect(() => {
    const result = async (videoIdChange) => {
      const response = await youtube(videoIdChange);
      if (response.items[0]) {
        setState({
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
    result(videoIdChange);
  }, [videoIdChange]);

  return (
    <div key={props.videoId} className="w-full container mx-auto m-4">
      <Link to={{ pathname: "/" }}>
        <button className=" hover:bg-black text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue rounded">
          Back
        </button>
      </Link>
      <br />
      <div id="tags">
        <div className="px-2">
          <div className="flex -mx-2">
            <Tags tags={state.tags} />
            <Info
              title={state.title}
              channelTitle={state.channelTitle}
              views={state.views}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsResults;
