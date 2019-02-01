import React from "react";
import { shallow } from "enzyme";
import LoginView from "./login.view";
import LoginForm from "../loginForm/loginForm";

describe("Login View", () => {
  it("should be defined", () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper).toBeDefined();
  });
  it("should contain a LoginForm Component", () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
});
