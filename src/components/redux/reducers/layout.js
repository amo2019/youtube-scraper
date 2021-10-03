import { actionTypes } from "../actions/layout";

const initialState = {
    navbar: true,
    videoPlayer: {
        video: "",
        visible: false
    }
};

export default function layout(state = initialState, action) {
    switch (action.type) {
       
        case actionTypes.START_VIDEO_PLAYER:
            return {
                ...state,
                videoPlayer: {
                    ...state.videoPlayer,
                    video: action.video,
                    visible: true
                }
            };

        case actionTypes.STOP_VIDEO_PLAYER:
            return {
                ...state,
                videoPlayer: { ...state.videoPlayer, video: "", visible: false }
            };

        default:
            return { ...state };
    }
}