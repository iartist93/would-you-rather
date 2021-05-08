import * as fakeData from "../services/_DATA";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { toggleLoading } from "./loading";
import { firebase } from "../firebase/firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//----------------------------------------------------//
// Constants

export const ADD_VOTE = "ADD_VOTE";
export const RECIEVE_AUTHEDUSER = "RECIEVE_AUTHEDUSER";

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

const recieveAuthedUser = (user) => ({
  type: RECIEVE_AUTHEDUSER,
  authedUser: user
    ? {
        id: user.uid,
        name: user.displayName,
        avatarURL: user.photoURL,
        answers: {},
        questions: [],
      }
    : user,
});

//----------------------------------------------------//
// Thunks

/**
 * Thunk for handling fetching inital data (questions, users)
 */
export const handleInitalData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    const [questions, users] = await Promise.all([
      fakeData._getQuestions(),
      fakeData._getUsers(),
    ]);
    dispatch(recieveQuestions(questions));
    dispatch(recieveUsers(users));
    dispatch(toggleLoading());
    dispatch(hideLoading());
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
  return async (dispatch) => {
    dispatch(showLoading());
    await fakeData._saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });
    dispatch(addVote(authedUser, qid, answer));
    dispatch(hideLoading());
  };
};

export const handleUserLogin = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(recieveAuthedUser(firebase.auth().currentUser));
    firebase.auth().onAuthStateChanged(async (authedUser) => {
      if (authedUser) {
        await fakeData._saveUser(authedUser);
        dispatch(recieveAuthedUser(authedUser));
      } else {
        dispatch(recieveAuthedUser(null));
      }
    });
    dispatch(hideLoading());
  };
};

//----------------------------------------------------//
