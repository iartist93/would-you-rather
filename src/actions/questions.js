import "../services/_DATA";
import * as fakeData from "../services/_DATA";

//----------------------------------------------------//
// Constants

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_COMMENT = "ADD_COMMENT";
export const GET_NEXT = "GET_NEXT";

//----------------------------------------------------//
// Action Creators

export const recieveQuestions = (questions) => ({
  type: RECIEVE_QUESTIONS,
  questions,
});

export const getNext = () => ({
  type: GET_NEXT,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const addComment = (comment, qid) => ({
  type: ADD_COMMENT,
  comment,
  qid,
});

//----------------------------------------------------//
// Thunks

/**
 * handle prepareing the question on the server by adding id, timestamp to it
 * store the new question on db and on state
 * @param {*} question object with `{title, optionOneText, optionTwoText, author}`
 */
export const handleSaveQuestion = (question) => {
  return async (dispatch) => {
    const reuslt = await fakeData._saveQuestion(question);
    console.log(reuslt);
    dispatch(addQuestion(reuslt));
  };
};
