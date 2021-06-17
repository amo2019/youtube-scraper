import React from "react";
import VideoPreview from "../VideoPreview/VideoPreview";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  if (!props.videos || !props.videos.length) {
    return <div className="related-videos" />;
  }

  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map((relatedVideo) => (
    <VideoPreview
      video={relatedVideo}
      key={relatedVideo.etag}
      videoId={relatedVideo.id.videoId}
      pathname="/resuls"
      search={`?v=${relatedVideo.id}`}
      horizontal={true}
      history={props.history}
    />
  ));

  return <div className="grid-container">{relatedVideosPreviews}</div>;
};

export default RelatedVideos;
