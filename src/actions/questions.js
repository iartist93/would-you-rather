import "../services/_DATA";

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
