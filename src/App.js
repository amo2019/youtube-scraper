import React, { Component } from "react";
import Header from "./components/Header/Header.jsx";
import MainPage from "./components/MainPage";
import StatsResults from "./components/StatsResults";
import { VideoIdProvider } from "./contexts/VideoIdContext";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <VideoIdProvider>
          <Header />
          <Switch>
            <Route
              path="/result"
              render={() => <StatsResults key={this.props.videoIdChange} />}
            />
            <Route path="/" component={MainPage} />
          </Switch>
        </VideoIdProvider>
      </div>
    );
  }
}
