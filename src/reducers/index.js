import questions from "./questions";
import users from "./users";
import loading from "./loading";
import authedUser from "./authedUser";
import active from "./active";
import { loadingBarReducer } from "react-redux-loading-bar";

import { combineReducers } from "redux";

const reducers = combineReducers({
  questions,
  users,
  loading,
  authedUser,
  active,
  loadingBar: loadingBarReducer,
});

export default reducers;
