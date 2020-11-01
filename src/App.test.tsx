import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { HomePage } from "pages/home-page/homePage";

test("renders the component", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

test("has homepage element", () => {
  const component = shallow(<App />);
  expect(component).toContain(<HomePage />);
});
