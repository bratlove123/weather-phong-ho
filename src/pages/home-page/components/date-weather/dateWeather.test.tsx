import { mount } from "enzyme";
import { WeatherByDate } from "models";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { DateWeather } from "./dateWeather";

const mockStore = configureStore([]);

describe("date weathers test connected to redux", () => {
  it("check elements value", () => {
    const store = mockStore({
      homePage: {
        dates: [],
      },
    });

    const dateWeather = {
      dt: 1604394000,
      main: {
        temp: 281.92,
        feels_like: 274.41,
        temp_min: 281.92,
        temp_max: 282.3,
      },
      weather: [{ icon: "rain" }],
    } as WeatherByDate;
    const tree = mount(
      <Provider store={store}>
        <DateWeather dateWeather={dateWeather} />
      </Provider>
    );
    expect(tree.find(".weekday").length === 1).toBeTruthy();
    expect(tree.find(".weekday").text() === "Tuesday").toBeTruthy();
    expect(tree.find(".date").length === 1).toBeTruthy();
    expect(tree.find(".date").text() === "03 - 11").toBeTruthy();
    expect(tree.find(".temprature").length === 1).toBeTruthy();
    expect(tree.find(".temprature").text()).toContain("9");
    expect(tree.find("img").length === 1).toBeTruthy();
    expect(tree.find("img").prop("src")).toContain("rain");
    expect(tree.find(".min-max").length === 1).toBeTruthy();
    expect(tree.find(".min-max").text()).toContain("1");
    expect(tree.find(".min-max").text()).toContain("9");
  });
});
