import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECIEVE_EXISTING_AUTHEDUSER = "RECIEVE_EXISTING_AUTHEDUSER";

const recieveExistingAuthedUser = (user) => ({
  type: RECIEVE_EXISTING_AUTHEDUSER,
  authedUser: user,
});

export const handleExistingUserLogin = (existingUser) => {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(recieveExistingAuthedUser(existingUser));
    dispatch(hideLoading());
  };
};

export const handleSignoutExistingUser = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(recieveExistingAuthedUser(null));
    dispatch(hideLoading());
  };
};
