const KEY = process.env.REACT_APP_KEY;

export default async function getServerSideProps(term) {
  let result = {};
  var url = new URL("https://www.googleapis.com/youtube/v3/videos"),
    params = {
      part: "snippet, statistics",
      key: KEY,
      id: term,
    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  await fetch(url, {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return result;
}
