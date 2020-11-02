import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { HomePage } from "pages/home-page/homePage";

test("renders the component", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

test("app contains home page", () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains(<HomePage></HomePage>)).toBeTruthy();
});