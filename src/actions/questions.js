export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";
export const ADD_COMMENT = "ADD_COMMENT";
export const GET_NEXT = "GET_NEXT";

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

export const addVote = (vote, questionId) => ({
  type: ADD_VOTE,
  vote,
  questionId,
});

export const addComment = (comment, questionId) => ({
  type: ADD_VOTE,
  comment,
  questionId,
});
