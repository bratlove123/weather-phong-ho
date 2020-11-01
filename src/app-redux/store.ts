import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run redux-saga
sagaMiddleware.run(rootSaga);

export default store;
