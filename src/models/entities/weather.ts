export interface WeatherResponse {
  cod: string;
  message: string;
  list: WeatherByDate[];
  city: City;
}

export interface City {
  id: number;
}

export interface WeatherByDate {
  dt: number;
  main: Main;
  weather: Weather[];
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
