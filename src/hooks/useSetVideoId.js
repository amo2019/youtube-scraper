import { useState } from "react";
function useSetVideoId(newIndex) {
  // call useState, "reserve piece of state"
  const [newstate, setNewState] = useState("x");
  const setVideoId = (newIndex) => {
    setNewState(newIndex);
  };
  // return piece of state AND a function to change it
  return [newstate, setVideoId];
}
export default useSetVideoId;
