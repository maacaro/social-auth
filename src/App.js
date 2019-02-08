import React, { Component } from "react";
import LandingView from "./components/views/landing.view";
import "./App.css";

class App extends Component {
  state = {
    isLogin: false,
    credentials: { email: null, name: null, picture: null }
  };
  singIn = credentials => {
    this.setState({ isLogin: true });
    this.setState({ credentials: credentials });
  };
  render() {
    return (
      <div className="App">
        <LandingView />
      </div>
    );
  }
}
export default App;
