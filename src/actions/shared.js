import * as fakeData from "../services/_DATA";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { toggleLoading } from "./loading";

//----------------------------------------------------//
// Constants

export const ADD_VOTE = "ADD_VOTE";

//----------------------------------------------------//
// Action Creators

/**
 * Add a new vote to a question
 * @param {*} answer either `"optionOne"` or `"optionTwo"`
 * @param {*} qid the question id to add vote to
 */
export const addVote = (authedUser, qid, answer) => ({
  type: ADD_VOTE,
  authedUser,
  qid,
  answer,
});

//----------------------------------------------------//
// Thunks

/**
 * Thunk for handling fetching inital data (questions, users)
 */
export const handleInitalData = () => {
  return async (dispatch) => {
    const [questions, users] = await Promise.all([
      fakeData._getQuestions(),
      fakeData._getUsers(),
    ]);
    dispatch(recieveQuestions(questions));
    dispatch(recieveUsers(users));
    dispatch(toggleLoading());
  };
};

/**
 * Thunk to save the current vote to DB
 * and then add it to both users and questions state
 * @param {*} authedUser the current authed user
 * @param {*} qid the question id to add vote to
 * @param {*} answer either `"optionOne"` or `"optionTwo"`
 */
export const handleAddVote = (authedUser, qid, answer) => {
  console.log("handler", authedUser, qid, answer);
  return async (dispatch) => {
    const result = await fakeData._saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });
    console.log(result);
    dispatch(addVote(authedUser, qid, answer));
  };
};

//----------------------------------------------------//
