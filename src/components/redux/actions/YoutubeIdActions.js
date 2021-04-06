import { YOUTUBEID_UPDATE } from "./types";

export const youtubeIdUpdate = (payload) => {
  return { type: YOUTUBEID_UPDATE, payload };
};
