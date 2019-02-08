import React, { Component } from "react";
import LandingView from "./components/views/landing.view";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingView />
      </div>
    );
  }
}

export default App;
