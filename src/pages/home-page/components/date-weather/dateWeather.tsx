import { WeatherByDate } from "models";
import { RootState } from "models/states/root-state";
import React from "react";
import { useSelector } from "react-redux";
import "./dateWeather.scss";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const toC = (kenvin: number) => {
  return Math.round(kenvin - 273.15);
};

const toDDMM = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  return dd + " - " + mm;
};

const rgbToHex = (r: number, g: number, b: number) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

const colorBaseOnTemp = (temp: number) => {
  const maxTemp = 50;
  const minTemp = 0;
  const redVal = Math.round((300 / (maxTemp - minTemp)) * (temp - minTemp));
  const blueVal = Math.round((300 / (maxTemp - minTemp)) * (maxTemp - temp));
  const hexfrom = rgbToHex(redVal, 170, blueVal);
  const hexto = rgbToHex(redVal, 100, blueVal);
  return `linear-gradient(to bottom, ${hexfrom}, ${hexto})`;
};

const searchStr = (state: RootState) => state.homePage.cityId;

export const DateWeather = ({
  dateWeather,
}: {
  dateWeather: WeatherByDate;
}) => {
  const date = new Date(dateWeather.dt * 1000);
  const weekday = days[date.getDay()];
  const dateStr = toDDMM(date);
  const temp = toC(dateWeather?.main?.temp);
  const tempMax = toC(dateWeather?.main?.temp_max);
  const tempMin = tempMax - 8;
  const color = colorBaseOnTemp(temp);
  const weather = dateWeather?.weather?.[0]?.icon;
  const search = useSelector(searchStr);

  return (
    <div
      onClick={() => {
        window.open(`https://openweathermap.org/city/${search}`);
      }}
      className="date-container"
      style={{ backgroundImage: color }}
    >
      <div className="weekday">{weekday}</div>
      <div className="date">{dateStr}</div>
      <div className="weather">
        <div className="temprature">{temp}&deg;</div>
        <img
          src={`http://openweathermap.org/img/wn/${weather}@2x.png`}
          alt=""
        />
      </div>

      <div className="min-max">
        {tempMin}&deg; - {tempMax}&deg;
      </div>
    </div>
  );
};
