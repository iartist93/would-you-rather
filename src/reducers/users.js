import { ADD_QUESTION } from "../actions/questions";
import { ADD_VOTE, RECIEVE_AUTHEDUSER } from "../actions/shared";
import { RECIEVE_USERS } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_AUTHEDUSER:
      return action.authedUser === null ||
        Object.keys(state).includes(action.authedUser.id)
        ? state
        : { ...state, [action.authedUser.id]: action.authedUser };
    case RECIEVE_USERS:
      return { ...state, ...action.users };
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
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };

    default:
      return state;
  }
};

export default users;
