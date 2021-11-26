import React, { useState, useEffect, useContext } from "react";
import "./VideoPreview.css";
import { VideoIdContext } from "../../contexts/VideoIdContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startVideoPlayer } from "../redux/actions/layout";
import { youtubeIdUpdate } from "../redux/actions/YoutubeIdActions";


function VideoPreview(props) {

    const videoPlayer = useSelector(state => state.layout.videoPlayer);
    const { setVideoIdChange } = useContext(VideoIdContext);
    const [videoId, setVideoId] = useState({
      idChange: "",
    });
    const dispatch = useDispatch();
  
    useEffect(() => {
            try{
              setVideoId(props.videoId);
              setVideoIdChange(props.videoId);
              dispatch(youtubeIdUpdate({ youtubeId: props.videoId }));
            }
            catch{
              console.log("No data..")
            }
    }, [props.videoId, setVideoIdChange, dispatch]);
  
  const handleClick = () => {
    setVideoId(props.videoId);
    setVideoIdChange(props.videoId);
    dispatch(youtubeIdUpdate({ youtubeId: props.videoId }));
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
            <img src={video.snippet.thumbnails.medium.url} className="img-center" alt="YouTube Video thumbnails" 
              onClick={() => triggerVideoPlayer()
            }
            />
          </div>
          <div onClick={() => handleClick()}>
          <Link to={{ pathname: "/result", videoId: videoId }}>
          <div>
            <div >{video.snippet.title}</div>

            <p>{video.snippet.channelTitle}</p>
            <div>{description}</div>
           
            <button className="flex-button">CLICK FOR DETAILS</button>
          </div>
          </Link>
          </div>
        </div>
        
      </div>
    
  );
}

export default VideoPreview;
