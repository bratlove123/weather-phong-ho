import { spawn } from "redux-saga/effects";

// Sagas
import homePageSaga from "./home-page/homePage.saga";

// Export the root saga
export default function* rootSaga() {
  yield spawn(homePageSaga);
}
