import React, { useState, useContext } from "react";
import "./VideoPreview.css";
import { VideoIdContext } from "../../contexts/VideoIdContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startVideoPlayer } from "../redux/actions/layout";
import YoutubePlayer from "../YoutubePlayer";


function VideoPreview(props) {
  const [videoId, setVideoId] = useState({
    idChange: "",
  });
  const dispatch = useDispatch();
  const videoPlayer = useSelector(state => state.layout.videoPlayer);
 
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
  
  const triggerVideoPlayer = ()=>{
    console.log("props.videoId:", props.videoId)
     dispatch(startVideoPlayer(props.videoId))
     setTimeout(()=>{console.log("videoPlayer:", videoPlayer.visible)}, 1000)
    
  }
  return (
    
      <div>
        <div className="flex-container">
          <div className="img" >
            <img src={video.snippet.thumbnails.medium.url} alt="YouTube Video thumbnails" 
              onClick={() => triggerVideoPlayer()
            }
            />
          </div>
          <Link to={{ pathname: "/result", videoId: videoId.idChange }}>
          <div>
            <div>{video.snippet.title}</div>

            <p>{video.snippet.channelTitle}</p>
            <div>{description}</div>
           
            <button className="flex-button"  onClick={() => handleClick(this)}>CLICK FOR DETAILS</button>
          </div>
          </Link>
        </div>
        {videoPlayer.visible? <YoutubePlayer/>: null}
      </div>
    
  );
}

export default VideoPreview;
