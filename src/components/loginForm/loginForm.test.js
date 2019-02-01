import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./loginForm";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

describe("LoginForm", () => {
  it("should contain a facebook login component", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find(FacebookLogin)).toHaveLength(1);
  });
  describe("the Facebook login component", () => {
    it("should have the appId prop set the FACEBOOK_APP_ID", () => {
      const wrapper = shallow(<LoginForm />);
      const FACEBOOK_APP_ID = "1270070933135348";

      expect(wrapper.find(FacebookLogin).props().appId).toEqual(
        FACEBOOK_APP_ID
      );
    });
    it("should have the `fields` prop set to `name,email,picture`", () => {
      const wrapper = shallow(<LoginForm />);
      const fields = "name,email,picture";

      expect(wrapper.find(FacebookLogin).props().fields).toEqual(fields);
    });
    it("should have the `callback` prop set to a function", () => {
      const wrapper = shallow(<LoginForm />);
      expect(wrapper.find(FacebookLogin).props().callback).toEqual(
        expect.any(Function)
      );
    });
  });
  it("should contain a `GoogleLogin` component", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find(GoogleLogin)).toHaveLength(1);
  });
  describe("GoogleLogin", () => {
    it("should have the `clientId` prop set to the GOOGLE_CLIENT_ID", () => {
      const wrapper = shallow(<LoginForm />);
      const GOOGLE_CLIENT_ID =
        "40032388679-3mcac9u2ocqaneo1uanklvecb4oranjk.apps.googleusercontent.com";
      expect(wrapper.find(GoogleLogin).props().clientId).toEqual(
        GOOGLE_CLIENT_ID
      );
    });
    it("should have the `onSuccess` prop set to a Function", () => {
      const wrapper = shallow(<LoginForm />);
      expect(wrapper.find(GoogleLogin).props().onSuccess).toEqual(
        expect.any(Function)
      );
    });
  });
});
