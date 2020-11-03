import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { HomePage } from "./homePage";
import configureStore from "redux-mock-store";
import { SearchInput } from "shared-components/inputs/search-input/searchInput";
import { DatesWeather } from "./components/dates-weather/datesWeather";
import { Loading } from "./components/loading-weather/loadingWeather";

const mockStore = configureStore([]);

describe("home page test connected to redux", () => {
  it("check elements", () => {
    const store = mockStore({
      homePage: {
        isLoading: false,
        dates: [],
        error: "error",
        cityId: NaN,
      },
    });
    const tree = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(tree.find(".title").length).toEqual(1);
    expect(tree.find(SearchInput).length === 1).toBeTruthy();
    expect(tree.find(DatesWeather).length === 1).toBeTruthy();
    expect(tree.find(Loading).length === 0).toBeTruthy();
    expect(tree.find(".error").length === 1).toBeTruthy();
  });

  it("check elements loading", () => {
    const store = mockStore({
      homePage: {
        isLoading: true,
        dates: [],
        error: "",
        cityId: NaN,
      },
    });
    const tree = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(tree.find(".title").length).toEqual(1);
    expect(tree.find(SearchInput).length === 1).toBeTruthy();
    expect(tree.find(DatesWeather).length === 1).toBeTruthy();
    expect(tree.find(Loading).length === 1).toBeTruthy();
    expect(tree.find(".error").length === 0).toBeTruthy();
  });
});
