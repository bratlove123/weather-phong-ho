import produce from "immer";
import { HomePageState, WeatherByDate } from "models";
import {
  GET_SEARCH_LOCATIONS_ERROR,
  GET_SEARCH_LOCATIONS_SUCCESS,
  HomePageTypes,
  SET_LOADING,
} from "./homePage.action";

// Define your state here
const initialState: HomePageState = {
  isLoading: false,
  dates: [],
  error: "",
};

export const homePage = (state = initialState, action: HomePageTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return produce(initialState, (draftState) => {
        draftState.isLoading = action.payload;
      });
    case GET_SEARCH_LOCATIONS_ERROR:
      return produce(initialState, (draftState) => {
        draftState.error = action.payload;
      });
    case GET_SEARCH_LOCATIONS_SUCCESS:
      return produce(initialState, (draftState) => {
        let dates = action.payload;
        let datesFilter: WeatherByDate[] = [];
        dates.forEach((date) => {
          if (
            datesFilter.length === 0 ||
            (datesFilter.length > 0 && datesFilter.length < 5 &&
              new Date(date.dt*1000).setHours(0, 0, 0, 0) >
                new Date(datesFilter[datesFilter.length - 1].dt*1000).setHours(
                  0,
                  0,
                  0,
                  0
                ))
          ) {
            datesFilter.push(date);
          }
        });

        draftState.dates = datesFilter;
        draftState.isLoading = false;
      });
    default:
      return state;
  }
};
