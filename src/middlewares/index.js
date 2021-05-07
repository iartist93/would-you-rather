import { applyMiddleware } from "redux";
import { logger } from "./logger";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk, logger);

export default middlewares;
