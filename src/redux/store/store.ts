import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import axiosMiddleware from "redux-axios-middleware";
import logger from "redux-logger";
import axios from "axios";
import rootSaga from "../saga/rootSaga";
import { rootReducer } from "../reducers/rootReducers";

const client = axios.create({
  baseURL: "https://dev.api.fundee.io",
  responseType: "json",
});

const { persistStore, persistReducer } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
  key: "AccessKey",
  whitelist: ["user"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(axiosMiddleware(client), sagaMiddleware, logger)
);
persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
