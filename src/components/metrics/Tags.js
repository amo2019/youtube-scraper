import React from "react";

function Tags(props) {
  var tags = props.tags.map(function (tag, i) {
    return <li>- {tag}</li>;
  });
  return (
    <div className="font-bold">
      <div>Tags</div>
      <ul>{tags}</ul>
    </div>
  );
}

export default Tags;
