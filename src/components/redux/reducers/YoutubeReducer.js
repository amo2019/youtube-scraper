import { YOUTUBEID_UPDATE } from "../actions/types";

const INITIAL_STATE = {
  youtubeId: "x",
};

export  const YoutubeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case YOUTUBEID_UPDATE:
      return { ...action.payload, loading: false };
    default:
      return state;
  }
};
