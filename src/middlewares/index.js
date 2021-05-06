import { applyMiddleware } from "redux";
import { logger } from "./logger";

const middlewares = applyMiddleware(logger);

export default middlewares;
