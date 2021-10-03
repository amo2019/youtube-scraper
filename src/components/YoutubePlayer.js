import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopVideoPlayer } from "./redux/actions/layout";
import "react-resizable/css/styles.css";

const YoutubePlayer = () => {
    const videoPlayer = useSelector(state => state.layout.videoPlayer);
    const dispatch = useDispatch();
    if (!videoPlayer.visible) {
        return null;
    }

   // ?autoplay=1?autoplay=1&origin=http://localhost:3000/&format=json
 
    return (
            <div className="custom-youtube-player">
                    <iframe
                        title={videoPlayer.video}
                        id="player"
                        type="text/html"
                        style={{ width: "100%", height: "100%" }}
                        src={`https://www.youtube.com/embed/${videoPlayer.video}`}
                        frameBorder="0"
                    ></iframe>

                    <div
                        className="close d-flex justify-content-center"
                        onClick={() => dispatch(stopVideoPlayer())}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="handle d-flex justify-content-center">
                        <i className="fas fa-arrows-alt"></i>
                    </div>
            </div>
    );
};

export default YoutubePlayer;