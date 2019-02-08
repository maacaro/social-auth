import React, { Component } from "react";
import LoginForm from "../loginForm/loginForm";
import DashBoard from "../dashboard/dashboard";

export default class LandingView extends Component {
  state = {
    isLogin: false,
    credentials: null
  };
  render() {
    const { isLogin, credentials } = this.state;
    return isLogin ? (
      <DashBoard credentials={{ ...credentials }} />
    ) : (
      <LoginForm
        onSuccessLogin={credentials =>
          this.setState({ isLogin: true, credentials: { ...credentials } })
        }
      />
    );
  }
}
