const KEY = process.env.REACT_APP_KEY;
let result = {};

export default async function getServerSideProps(term) {
  var url = new URL("https://www.googleapis.com/youtube/v3/search"),
    params = {
      part: "id,snippet",
      key: KEY,
      maxResults: 11,
      q: String(term).trim(),
      chart: "mostPopular",
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
