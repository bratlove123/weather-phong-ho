import store from "app-redux/store";
import { mount, shallow } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { SearchInput } from "shared-components/inputs/search-input/searchInput";
import { DatesWeather } from "./components/dates-weather/datesWeather";
import { HomePage } from "./homePage";

it("check elements", () => {
  const tree = mount(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

  expect(tree.contains(<div>hihi</div>)).toBeTruthy();
  // expect(tree.find("button").length).toEqual(1);
});
