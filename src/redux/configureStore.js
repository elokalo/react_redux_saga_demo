import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import postReducer from "./docs/post";
import logger from "redux-logger";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  post: postReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
