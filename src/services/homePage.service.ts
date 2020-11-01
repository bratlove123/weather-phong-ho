import { axios } from "models/apis/base";

export const searchLocationsRequest = async (title: string) => {
  try {
    const todos = await axios.get(`?appid=115ce4fa3cb854702c47dc3beafc07eb&ctn=5&q=${title}`);

    return todos.data;
  } catch (err) {
    return err;
  }
};
