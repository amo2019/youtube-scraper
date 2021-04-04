import React, { createContext } from "react";
import useSetVideoId from "../hooks/useSetVideoId";

export const VideoIdContext = createContext();

export function VideoIdProvider(props) {
  const [videoIdChange, setVideoIdChange] = useSetVideoId();
  return (
    <VideoIdContext.Provider value={{ videoIdChange, setVideoIdChange }}>
      {props.children}
    </VideoIdContext.Provider>
  );
}
