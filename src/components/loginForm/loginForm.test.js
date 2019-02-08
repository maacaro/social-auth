import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./loginForm";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

describe("LoginForm", () => {
  it("should contain a facebook login component", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find(FacebookLogin)).toHaveLength(1);
  });
  describe("on success login by facebook", () => {
    it("should call the onSuccessLogin with user credentials", () => {
      const response = {
        name: "Manuel Castro",
        email: "maacaro@gmail.com",
        picture: { data: { url: "someURL" } }
      };
      const credentials = {
        name: "Manuel Castro",
        email: "maacaro@gmail.com",
        picture: "someURL"
      };
      const onSuccessLogin = jest.fn(response => null);

      const wrapper = shallow(<LoginForm onSuccessLogin={onSuccessLogin} />);
      wrapper
        .find(FacebookLogin)
        .props()
        .callback(response);
      expect(onSuccessLogin).toBeCalledWith(credentials);
    });
  });
  it("should contain a `GoogleLogin` component", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find(GoogleLogin)).toHaveLength(1);
  });
  describe("on success login by Google", () => {
    it("should call the onSuccessLogin with user credentials", () => {
      const response = {
        profileObj: {
          email: "maacaro@gmail.com",
          imageUrl: "someURL",
          givenName: "Manuel",
          familyName: "Castro"
        }
      };
      const credentials = {
        name: "Manuel Castro",
        email: "maacaro@gmail.com",
        picture: "someURL"
      };
      const onSuccessLogin = jest.fn(response => null);

      const wrapper = shallow(<LoginForm onSuccessLogin={onSuccessLogin} />);
      wrapper
        .find(GoogleLogin)
        .props()
        .onSuccess(response);
      expect(onSuccessLogin).toBeCalledWith(credentials);
    });
  });
});
