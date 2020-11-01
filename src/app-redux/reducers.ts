// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import { homePage } from "./home-page/homePage.reducer";

export const rootReducer = combineReducers({
  homePage,
});