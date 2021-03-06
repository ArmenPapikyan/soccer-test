import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

// const loggerMiddleware = createLogger();

const Store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default Store;
