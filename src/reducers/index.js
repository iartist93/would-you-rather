import questions from "./questions";
import users from "./users";
import loading from "./loading";
import authedUser from "./authedUser";

import { combineReducers } from "redux";

const reducers = combineReducers({ questions, users, loading, authedUser });

export default reducers;
