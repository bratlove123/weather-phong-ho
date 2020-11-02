import { WeatherByDate } from "models/entities/weather";

export interface HomePageState {
  dates: WeatherByDate[];
  isLoading: boolean;
  error: string;
  cityId: number;
}
