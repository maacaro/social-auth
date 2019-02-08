import React from "react";
import { shallow } from "enzyme";
import LandingView from "./landing.view";
import LoginForm from "../loginForm/loginForm";
import DashBoard from "../dashboard/dashboard";

describe("Landing View", () => {
  it("should be defined", () => {
    const wrapper = shallow(<LandingView />);
    expect(wrapper).toBeDefined();
  });
  it("should render a LoginForm Component", () => {
    const wrapper = shallow(<LandingView />);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
  it("should render a dashboard on Successful Login ", () => {
    const wrapper = shallow(<LandingView />);
    wrapper
      .find(LoginForm)
      .props()
      .onSuccessLogin();
    expect(wrapper.find(DashBoard)).toHaveLength(1);
  });
  it("should render a dashboard with credentials props on Successful Login ", () => {
    const wrapper = shallow(<LandingView />);
    const credentials = { foo: "foo", bar: "bar" };
    wrapper
      .find(LoginForm)
      .props()
      .onSuccessLogin(credentials);
    expect(wrapper.find(DashBoard).props().credentials).toEqual(credentials);
  });
});
