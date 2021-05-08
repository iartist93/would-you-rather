import { applyMiddleware } from "redux";
import { logger } from "./logger";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk, logger);
// const middlewares = applyMiddleware(thunk);

export default middlewares;
