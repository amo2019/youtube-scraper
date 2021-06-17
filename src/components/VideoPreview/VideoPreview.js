import React, { useState, useContext } from "react";
import "./VideoPreview.css";
import { VideoIdContext } from "../../contexts/VideoIdContext";
import { Link } from "react-router-dom";
import { youtubeIdUpdate } from "../redux/actions";
import { connect } from "react-redux";

function VideoPreview(props) {
  const [videoId, setVideoId] = useState({
    idChange: "",
  });
  console.log("youtubeIdState:", props.videoIdState.youtubeId);
  const { setVideoIdChange } = useContext(VideoIdContext);
  const handleClick = () => {
    setVideoId(props.videoId);
    setVideoIdChange(props.videoId);
    props.youtubeIdUpdate({ youtubeId: props.videoId });
  };
  const { video } = props;
  if (!video) {
    return <div />;
  }

  const description = props.expanded ? video.snippet.description : null;
  // let idChanged = false;
  // let videoIdChanged = props.videoId;
  // let stateIdChange = props.videoId;
  // if (videoId) {
  //   stateIdChange = videoId.idChange;
  // }

  // (videoIdChanged !== stateIdChange) &&
  // (String(videoIdChanged).trim() !== "undefined")
  //   ? (idChanged = true)
  //   : (idChanged = false);
  return (
    <Link to={{ pathname: "/result", videoId: videoId.idChange }}>
      <div onClick={() => handleClick(this)}>
        <div className="flex-container">
          <div className="img">
            <img src={video.snippet.thumbnails.medium.url} alt="YouTube Video thumbnails" />
          </div>
          <div>
            <div>{video.snippet.title}</div>

            <p>{video.snippet.channelTitle}</p>
            <div>{description}</div>

            <button className="flex-button">CLICK FOR DETAILS</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => {
  const { videoIdState } = state;
  return { videoIdState };
};

export default connect(mapStateToProps, { youtubeIdUpdate })(VideoPreview);
