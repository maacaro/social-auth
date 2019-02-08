import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import "./loginForm.css";

const LoginForm = ({ onSuccessLogin = () => null }) => (
  <div>
    <div className="container">
      <form action="/action_page.php">
        <div className="row">
          <h2 style={{ textAlign: "center" }}>
            Login with Social Media or Manually
          </h2>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>

          <div className="col">
            <FacebookLogin
              appId="1270070933135348"
              fields="name,email,picture"
              callback={response =>
                onSuccessLogin(handleLogin("facebook", response))
              }
              render={renderProps => (
                <button
                  type="button"
                  className="fb btn"
                  onClick={renderProps.onClick}
                >
                  <i className="fa fa-facebook fa-fw" />
                  Login with Facebook
                </button>
              )}
            />
            <GoogleLogin
              clientId="40032388679-3mcac9u2ocqaneo1uanklvecb4oranjk.apps.googleusercontent.com"
              onSuccess={response =>
                onSuccessLogin(handleLogin("google", response))
              }
              render={renderProps => (
                <button
                  type="button"
                  className="google btn"
                  onClick={renderProps.onClick}
                >
                  <i className="fa fa-google fa-fw" /> Login with Google+
                </button>
              )}
            />
          </div>

          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>

    <div className="bottom-container">
      <div className="row">
        <div className="col">
          <a href="#" style={{ color: "white" }} className="btn">
            Sign up
          </a>
        </div>
        <div className="col">
          <a href="#" style={{ color: "white" }} className="btn">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;

const handleLogin = (isLoginBy, response) => {
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
