import { combineReducers } from "redux";
import {YoutubeReducer} from "./YoutubeReducer";
import layout from "./layout";

export default combineReducers({
  videoIdState: YoutubeReducer,
  layout
});
