import { WeatherResponse } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { searchLocationsRequest } from "../../services/homePage.service";

// Import all actions
import {
  SET_LOADING,
  SearchLocations,
  SEARCH_LOCATIONS,
  GET_SEARCH_LOCATIONS_SUCCESS,
  GET_SEARCH_LOCATIONS_ERROR,
} from "./homePage.action";

function* searchLocations(action: SearchLocations) {
  yield put({ type: SET_LOADING, payload: true });

  const locationsResponse: WeatherResponse = yield call(
    searchLocationsRequest,
    action.payload
  );

  if (locationsResponse && locationsResponse.cod === "200") {
    yield put({
      type: GET_SEARCH_LOCATIONS_SUCCESS,
      payload: locationsResponse.list,
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
