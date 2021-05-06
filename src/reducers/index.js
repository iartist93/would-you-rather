import questions from "./questions";
import users from "./users";

import { combineReducers } from "redux";

const reducers = combineReducers({ questions, users });

export default reducers;
