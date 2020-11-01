import { RootState } from "models/states/root-state";
import React from "react";
import { useSelector } from "react-redux";
import "./datesWeather.scss";
import { WeatherByDate } from "models";
import { DateWeather } from "../date-weather/dateWeather";

const dates = (state: RootState) => state.homePage.dates;

export const DatesWeather = () => {
  const dts = useSelector(dates);

  return (
    <div className="dates-container">
      {dts.map((dt: WeatherByDate) => {
        return <DateWeather key={dt.dt} dateWeather={dt}></DateWeather>;
      })}
    </div>
  );
};
