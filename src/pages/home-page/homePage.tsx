import { SEARCH_LOCATIONS } from "app-redux";
import { RootState } from "models/states/root-state";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "shared-components/inputs/search-input/searchInput";
import { DatesWeather } from "./components/dates-weather/datesWeather";
import { Loading } from "./components/loading-weather/loadingWeather";

import "./homePage.scss";

const isLoadingState = (state: RootState) => state.homePage.isLoading;
const errorMessageState = (state: RootState) => state.homePage.error;

export const HomePage = () => {
  const isLoading = useSelector(isLoadingState);
  const errorMessage = useSelector(errorMessageState);
  const dispatch = useDispatch();

  return (
    <div className="home-page-container">
      <div className="title">WEATHER FORECAST</div>
      <div className="search-container">
        <div className="search">
          <SearchInput
            placeholder="Type a city. Example: London"
            saving={isLoading}
            onSubmitSearch={(val: string) => {
              dispatch({ type: SEARCH_LOCATIONS, payload: val });
            }}
          ></SearchInput>
        </div>
      </div>
      <div className="weather-container">
        {isLoading && <Loading />}
        {errorMessage !== "" && (
          <div className="error">Opps! {errorMessage}</div>
        )}
        <DatesWeather></DatesWeather>
      </div>
    </div>
  );
};
