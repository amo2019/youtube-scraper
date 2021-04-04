const KEY = process.env.REACT_APP_KEY;
let result = {};
const YOUTUBE_PLAYLIST_API = "https://www.googleapis.com/youtube/v3/search";
let searchWord = "dogs";
var url = new URL("https://www.googleapis.com/youtube/v3/search"),
  params = {
    part: "id,snippet",
    key: KEY,
    maxResults: 8,
    q: "dogs",
  };
Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
export default async function getServerSideProps() {
  const res = await fetch(url, {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      result = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return result;
}
