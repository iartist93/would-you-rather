import { ADD_VOTE } from "../actions/shared";
import { RECIEVE_USERS } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_USERS:
      return action.users;
    case ADD_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
