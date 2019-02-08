import React from "react";
import { shallow } from "enzyme";
import LandingView from "./landing.view";
import LoginForm from "../loginForm/loginForm";
import DashBoard from "../dashboard/dashboard";
import { handleLogin } from "./landing.view";

describe("Landing View", () => {
  it("should be defined", () => {
    const wrapper = shallow(<LandingView />);
    expect(wrapper).toBeDefined();
  });
  it("should contain a LoginForm Component when is not login", () => {
    const wrapper = shallow(<LandingView isLogin={false} />);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
  it("should have a onSuccessLogin prop set to a function", () => {
    const wrapper = shallow(<LandingView />);
    expect(wrapper.find(LoginForm).props().onSuccessLogin).toEqual(
      expect.any(Function)
    );
  });
  it("should not contain a LoginFrom when the user is Login", () => {
    const wrapper = shallow(<LandingView isLogin={true} />);
    expect(wrapper.find(LoginForm)).toHaveLength(0);
  });
  it("should not contain a DashBoard when the user is Login", () => {
    const wrapper = shallow(<LandingView isLogin={true} />);
    expect(wrapper.find(DashBoard)).toHaveLength(1);
  });
  describe("the handleLogin function", () => {
    describe("when the login by google is succesful", () => {
      it("should return a object {name, email,picture}", () => {
        const googleResponse = {
          profileObj: {
            email: "maacaro@gmail.com",
            imageUrl: "someURL",
            givenName: "Manuel",
            familyName: "Castro"
          }
        };
        const userInfo = handleLogin("google", googleResponse);
        expect(userInfo).toEqual({
          name: "Manuel Castro",
          email: "maacaro@gmail.com",
          picture: "someURL"
        });
      });
    });
    describe("when the login by facebook is succesful", () => {
      it("should return a object {name, email,picture}", () => {
        const responseFacebook = {
          name: "Manuel Castro",
          email: "maacaro@gmail.com",
          picture: { data: { url: "someURL" } }
        };
        const userInfo = handleLogin("facebook", responseFacebook);
        expect(userInfo).toEqual({
          name: "Manuel Castro",
          email: "maacaro@gmail.com",
          picture: "someURL"
        });
      });
    });
  });
});
