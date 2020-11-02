import { WeatherResponse } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/homePage.service";

// Import all actions
import {
  SearchLocations,
  SEARCH_LOCATIONS,
  GET_SEARCH_LOCATIONS_SUCCESS,
  GET_SEARCH_LOCATIONS_ERROR,
} from "./homePage.action";

export function* searchLocations(action: SearchLocations) {
  const locationsResponse: WeatherResponse = yield call(
    api.searchLocationsRequest,
    action.payload
  );

  if (locationsResponse && locationsResponse.cod === "200") {
    yield put({
      type: GET_SEARCH_LOCATIONS_SUCCESS,
      payload: locationsResponse,
    });
  } else {
    yield put({
      type: GET_SEARCH_LOCATIONS_ERROR,
      payload: locationsResponse?.message.indexOf("404")
        ? "City not found"
        : locationsResponse?.message ?? "Service error.",
    });
  }
}

export default function* homePageSaga() {
  yield takeLatest<SearchLocations>(SEARCH_LOCATIONS, searchLocations);
}
