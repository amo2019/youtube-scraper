import React from "react";

function Info(props) {
  return (
    <div className="details-box">
      <div className="card-title">Info</div>
      <div className="card-details">
        <div>
          <strong>Channel Title: </strong>
          <span>{props.channelTitle}</span>
        </div>
        <div>
          <strong>Video Title: </strong>
          <span>{props.title}</span>
        </div>
        <div>
          <strong>Views: </strong>
          <span>{props.views}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
