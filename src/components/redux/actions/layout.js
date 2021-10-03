export const actionTypes = {
    START_VIDEO_PLAYER: "VideoPlayer-start",
    STOP_VIDEO_PLAYER: "VideoPlayer-stop"
};

export function startVideoPlayer(video) {
    return dispatch => {
        return dispatch({ type: actionTypes.START_VIDEO_PLAYER, video });
    };
}

export function stopVideoPlayer() {
    return dispatch => {
        return dispatch({ type: actionTypes.STOP_VIDEO_PLAYER });
    };
}