import Header from "./components/Header/Header.jsx";
import MainPage from "./components/MainPage";
import StatsResults from "./components/StatsResults";
import { VideoIdProvider } from "./contexts/VideoIdContext";
import { Route, Switch } from "react-router-dom";
import YoutubePlayer from "./components/YoutubePlayer";
import { useSelector } from "react-redux";

const App= (props)=> {
  const videoPlayer = useSelector(state => state.layout.videoPlayer);
    return (
      <div>
        <VideoIdProvider>
          <Header />
          <Switch>
            <Route
              path="/result"
              render={() => <StatsResults key={props.videoIdChange} />}
            />
            <Route path="/" component={MainPage} />
          </Switch>
          {videoPlayer.visible && <YoutubePlayer/>}
        </VideoIdProvider>
      </div>
    );
}

export default App;