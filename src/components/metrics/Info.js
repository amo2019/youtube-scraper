import React from "react";

function Info(props) {
  return (
    <div>
      <div className="font-bold">Info</div>
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
  );
}

export default Info;
