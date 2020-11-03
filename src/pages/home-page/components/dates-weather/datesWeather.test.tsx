import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { DateWeather } from "../date-weather/dateWeather";
import { DatesWeather } from "./datesWeather";

const mockStore = configureStore([]);

describe("date weathers test connected to redux", () => {
  it("check elements empty", () => {
    const store = mockStore({
      homePage: {
        dates: [],
      },
    });
    const tree = mount(
      <Provider store={store}>
        <DatesWeather />
      </Provider>
    );
    expect(tree.find(DateWeather).length === 0).toBeTruthy();
  });

  it("check elements has date", () => {
    const store = mockStore({
      homePage: {
        dates: [{ dt: 3747834 }, { dt: 748484 }],
      },
    });
    const tree = mount(<Provider store={store}>{<DatesWeather />}</Provider>);
    expect(tree.find(DateWeather).length === 2).toBeTruthy();
  });
});
