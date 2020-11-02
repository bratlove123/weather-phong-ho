import { runSaga } from "redux-saga";

import {
  GetSearchLocationsError,
  GetSearchLocationsSuccess,
  GET_SEARCH_LOCATIONS_ERROR,
  GET_SEARCH_LOCATIONS_SUCCESS,
  SEARCH_LOCATIONS,
} from "./homePage.action";

import { searchLocations } from "./homePage.saga";
import { api } from "services";

describe("homepage saga test", () => {
  it("should call api and dispatch success action", async () => {
    const dummyDt = require("./mock/mockDataSuccess.json");
    const requestWeathers = jest
      .spyOn(api, "searchLocationsRequest")
      .mockImplementation(() => Promise.resolve(dummyDt));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      searchLocations as any,
      { type: SEARCH_LOCATIONS, payload: "london" }
    );

    expect(requestWeathers).toHaveBeenCalledTimes(1);
    const action = {
      type: GET_SEARCH_LOCATIONS_SUCCESS,
      payload: dummyDt,
    } as GetSearchLocationsSuccess;
    expect(dispatched).toEqual([action]);
    requestWeathers.mockClear();
  });

  it("should call api and dispatch error action", async () => {
    const dummyDt = require("./mock/mockDataFail.json");
    const requestWeathers = jest
      .spyOn(api, "searchLocationsRequest")
      .mockImplementation(() => Promise.resolve(dummyDt));
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      searchLocations as any,
      { type: SEARCH_LOCATIONS, payload: "london" }
    );

    expect(requestWeathers).toHaveBeenCalledTimes(1);
    const action = {
      type: GET_SEARCH_LOCATIONS_ERROR,
      payload: "City not found",
    } as GetSearchLocationsError;
    expect(dispatched).toEqual([action]);
    requestWeathers.mockClear();
  });
});
