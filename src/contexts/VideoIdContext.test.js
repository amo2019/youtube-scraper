import React from "react";
import VideoPreview from "../components/VideoPreview/VideoPreview";
import { render } from "@testing-library/react";
import  {VideoIdContext}  from "./VideoIdContext";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../components/redux/reducers";
import reduxThunk from "redux-thunk";
import { mount } from "enzyme";

let store;


let composeEnhancers = compose;

store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );  

  describe("<VideoPreview />", () => {
    //const { videoIdChange, setVideoIdChange } = useContext(VideoIdContext);  
  
      const video = {
          videoIdChange: "x",
          setVideoIdChange: jest.fn(),
      };
  
     const Wrapper = mount(
          <VideoIdContext.Provider value={video.videoIdChange}>
            <VideoPreview store={store} />
          </VideoIdContext.Provider>
        );
  
        it("rendering VideoPreview within context:", () => {
         jest.fn()
          render(
            <VideoIdContext.Provider value={video.videoIdChange}>
            <VideoPreview store={store} />
          </VideoIdContext.Provider>
          )
        });
  });
  