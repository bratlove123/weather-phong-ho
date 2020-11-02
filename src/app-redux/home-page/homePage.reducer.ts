import produce from "immer";
import { HomePageState, WeatherByDate } from "models";
import {
  GET_SEARCH_LOCATIONS_ERROR,
  GET_SEARCH_LOCATIONS_SUCCESS,
  HomePageTypes,
  SEARCH_LOCATIONS,
  SET_LOADING,
} from "./homePage.action";

// Define your state here
const initialState: HomePageState = {
  isLoading: false,
  dates: [],
  error: "",
  cityId: NaN,
};

export const homePage = (state = initialState, action: HomePageTypes) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case SET_LOADING:
        draftState.isLoading = action.payload;
        break;
      case SEARCH_LOCATIONS:
        draftState.isLoading = true;
        draftState.dates = [];
        draftState.error = "";
        break;
      case GET_SEARCH_LOCATIONS_ERROR:
        draftState.error = action.payload;
        draftState.isLoading = false;
        break;
      case GET_SEARCH_LOCATIONS_SUCCESS:
        let dates = action.payload.list;
        let datesFilter: WeatherByDate[] = [];
        dates.forEach((date) => {
          if (
            datesFilter.length === 0 ||
            (datesFilter.length > 0 &&
              datesFilter.length < 5 &&
              new Date(date.dt * 1000).setHours(0, 0, 0, 0) >
                new Date(
                  datesFilter[datesFilter.length - 1].dt * 1000
                ).setHours(0, 0, 0, 0))
          ) {
            datesFilter.push(date);
          }
        });

        draftState.dates = datesFilter;
        draftState.isLoading = false;
        draftState.cityId = action.payload.city.id
        break;
      default:
        return draftState;
    }
  });
