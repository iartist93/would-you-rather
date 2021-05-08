import { RECIEVE_AUTHEDUSER } from "../actions/shared";
import { RECIEVE_EXISTING_AUTHEDUSER } from "../actions/authedUser";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case RECIEVE_AUTHEDUSER:
      return action.authedUser;
    case RECIEVE_EXISTING_AUTHEDUSER:
      return action.authedUser;
    default:
      return state;
  }
};

export default authedUser;
