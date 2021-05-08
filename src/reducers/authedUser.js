import { RECIEVE_AUTHEDUSER } from "../actions/shared";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case RECIEVE_AUTHEDUSER:
      return action.authedUser;
    default:
      return state;
  }
};

export default authedUser;
