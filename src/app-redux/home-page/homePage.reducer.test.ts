import { GET_SEARCH_LOCATIONS_ERROR, GET_SEARCH_LOCATIONS_SUCCESS, SET_LOADING } from "app-redux";
import { HomePageState, WeatherResponse } from "models";
import { homePage } from "./homePage.reducer";

describe("home page reducer test", () => {
  const initialState = {
    isLoading: false,
    dates: [],
    error: "",
    cityId: NaN,
  } as HomePageState;

  it("set loading if received action set_loading", () => {
    const newState = homePage(initialState, {
      type: SET_LOADING,
      payload: true,
    });

    expect(newState.isLoading).toEqual(true);
  });

  it("return list dates after received search_location_success", () => {
    const dummyDt = require("./mock/mockDataSuccess.json");
    let res: WeatherResponse = JSON.parse(JSON.stringify(dummyDt));
    const newState = homePage(initialState, {
      type: GET_SEARCH_LOCATIONS_SUCCESS,
      payload: res,
    });

    expect(newState.dates.length).toEqual(5);
  });

  it("return list dates after received search_location_error", () => {
    const newState = homePage(initialState, {
      type: GET_SEARCH_LOCATIONS_ERROR,
      payload: "error",
    });

    expect(newState.error !== "").toBeTruthy();
  });
});
