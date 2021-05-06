import questions from "./questions";
import users from "./users";
import loading from "./loading";

import { combineReducers } from "redux";

const reducers = combineReducers({ questions, users, loading });

export default reducers;
