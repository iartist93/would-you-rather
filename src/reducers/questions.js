import "../actions/questions";
import {
  ADD_COMMENT,
  ADD_QUESTION,
  ADD_VOTE,
  GET_NEXT,
  RECIEVE_QUESTIONS,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      break;
    case ADD_VOTE:
      break;
    case GET_NEXT:
      break;
    case ADD_COMMENT:
      break;
    default:
      return state;
  }
};

export default questions;
