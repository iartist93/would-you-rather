import { TOGGLE_LOADING } from "../actions/loading";

const loading = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return !state;
    default:
      return state;
  }
};
export default loading;
