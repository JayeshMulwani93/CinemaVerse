import { authSliceActions } from "./user-slice";

export const fetchSignInStatusActionThunk = () => {
  const userId = localStorage.getItem("userId");

  return (dispatch) => {
    dispatch(
      authSliceActions.signIn({
        userId: userId,
      })
    );
  };
};

export const signInActionThunk = (userId) => {
  const updatedUserId = getPlainUserIdWithoutSpecialChars(userId);
  localStorage.setItem("userId", updatedUserId);
  return (dispatch) => {
    dispatch(
      authSliceActions.signIn({
        userId: updatedUserId,
      })
    );
  };
};

export const signOutActionThunk = (userId) => {
  localStorage.removeItem("userId");
  return (dispatch) => {
    dispatch(authSliceActions.signOut());
  };
};

const getPlainUserIdWithoutSpecialChars = (inputUserId) => {
  if (!inputUserId || inputUserId === null) {
    return "";
  }
  return inputUserId.replace(/[^a-zA-Z0-9 ]/g, "");
};
