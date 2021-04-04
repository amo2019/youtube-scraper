import React, { useState, useContext } from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.css";
import { VideoIdContext } from "../contexts/VideoIdContext";
import { Link } from "react-router-dom";

function VideoPreview(props) {
  const [videoId, setVideoId] = useState({
    idChange: "",
  });

  const { setVideoIdChange } = useContext(VideoIdContext);
  const handleClick = () => {
    setVideoId(props.videoId);
    setVideoIdChange(props.videoId);
  };
  const { video } = props;
  if (!video) {
    return <div />;
  }

  const horizontal = props.horizontal ? "horizontal" : null;
  const expanded = props.expanded ? "expanded" : null;
  const description = props.expanded ? video.snippet.description : null;
  let idChanged = false;
  let videoIdChanged = props.videoId;
  let stateIdChange = props.videoId;
  if (videoId) {
    stateIdChange = videoId.idChange;
  }

  videoIdChanged !== stateIdChange &&
  String(videoIdChanged).trim() !== "undefined"
    ? (idChanged = true)
    : (idChanged = false);
  return (
    <Link to={{ pathname: "/result", videoId: videoId.idChange }}>
      <div onClick={() => handleClick(this)}>
        <div className="flex-container">
          <div className="img">
            <img src={video.snippet.thumbnails.medium.url} />
          </div>
          <div>
            <div>{video.snippet.title}</div>

            <p>{video.snippet.channelTitle}</p>
            <div>{description}</div>

            <button className="flex-button hover:bg-black">
              CLICK FOR DETAILS
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoPreview;
