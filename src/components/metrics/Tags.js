import React from "react";

function Tags(props) {
  if (String(props.tags).trim() === "undefined")
    return <li> no tags exist -</li>;
  var tags = props.tags.map(function (tag, i) {
    return <li style={{marginLeft: "0.4rem", paddingLeft: "0.3rem"}} key={tag}> {tag}</li>;
  });
  return (
    <div key={props.tags} className="details-box">
      <div className="y-4">
        <div className="card-title">Tags</div>
        <ul className="card-details">{tags}</ul>
      </div>
    </div>
  );
}

export default Tags;
