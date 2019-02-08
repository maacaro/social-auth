import React from "react";
import LoginForm from "../loginForm/loginForm";
import DashBoard from "../dashboard/dashboard";

const landingView = ({ isLogin }) =>
  isLogin ? <DashBoard /> : <LoginForm onSuccessLogin={() => {}} />;

export const handleLogin = (isLoginBy, response) => {
  if (isLoginBy === "google") {
    return {
      email: response.profileObj.email,
      name: `${response.profileObj.givenName} ${
        response.profileObj.familyName
      }`,
      picture: response.profileObj.imageUrl
    };
  }
  if (isLoginBy === "facebook") {
    return {
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    };
  }
};
export default landingView;
