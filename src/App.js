import React, { Component } from "react";
import LoginView from "./components/views/login.view";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginView />
      </div>
    );
  }
}

export default App;
