import React from "react";

function Tags(props) {
  if (String(props.tags).trim() === "undefined")
    return <li>- no tags exist -</li>;
  var tags = props.tags.map(function (tag, i) {
    return <li>- {tag}</li>;
  });
  console.log(props);
  return (
    <div
      key={props.tags}
      className="w-1/2 px-2 rounded overfloww-hidden shadow-lg "
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tags</div>
        <ul className="text-gray-700 text-base p-4">{tags}</ul>
      </div>
    </div>
  );
}

export default Tags;
