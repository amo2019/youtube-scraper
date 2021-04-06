import { combineReducers } from "redux";
import YoutubeReducer from "./YoutubeReducer";

export default combineReducers({
  videoIdState: YoutubeReducer,
});
