import * as fakeData from "../services/_DATA";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { toggleLoading } from "./loading";

// Thunk for handling fetching inital data (questions, users)
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
