import {
  ADD_COMMENT,
  ADD_QUESTION,
  GET_NEXT,
  RECIEVE_QUESTIONS,
} from "../actions/questions";

import { ADD_VOTE } from "../actions/shared";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return action.questions;
    case ADD_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case GET_NEXT:
      break;
    case ADD_COMMENT:
      break;
    default:
      return state;
  }
};

export default questions;
