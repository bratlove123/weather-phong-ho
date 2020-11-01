import defaultAxios from "axios";

export const axios = defaultAxios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  },
});
