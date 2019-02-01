import React from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

const LoginForm = () => (
  <div>
    <FacebookLogin
      appId="1270070933135348"
      fields="name,email,picture"
      callback={() => null}
    />
    <GoogleLogin
      clientId="40032388679-3mcac9u2ocqaneo1uanklvecb4oranjk.apps.googleusercontent.com"
      onSuccess={() => null}
    />
  </div>
);

export default LoginForm;
