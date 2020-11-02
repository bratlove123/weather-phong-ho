import { WeatherResponse } from "models";

export const GET_DATES = "GET_DATES";
export const SET_LOADING = "SET_LOADING";
export const SEARCH_LOCATIONS = "SEARCH_LOCATIONS";
export const GET_SEARCH_LOCATIONS_SUCCESS = "SEARCH_LOCATIONS_SUCCESS";
export const GET_SEARCH_LOCATIONS_ERROR = "GET_SEARCH_LOCATIONS_ERROR";

interface GetDatesAction {
  type: typeof GET_DATES;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SearchLocations {
  type: typeof SEARCH_LOCATIONS;
  payload: string;
}

export interface GetSearchLocationsSuccess {
  type: typeof GET_SEARCH_LOCATIONS_SUCCESS;
  payload: WeatherResponse;
}

export interface GetSearchLocationsError {
  type: typeof GET_SEARCH_LOCATIONS_ERROR;
  payload: string;
}

export type HomePageTypes =
  | GetDatesAction
  | SetLoadingAction
  | GetSearchLocationsError
  | SearchLocations
  | GetSearchLocationsSuccess;
