import { createSlice } from "@reduxjs/toolkit";

const getPlainUserIdWithoutSpecialChars = (inputUserId) => {
  if (!inputUserId || inputUserId === null) {
    return "";
  }
  return inputUserId.replace(/[^a-zA-Z0-9 ]/g, "");
};

const isSignedIn = (userId) => {
  return userId && userId !== null && userId.length > 0 ? true: false;
};

const initialState = {
  userId: localStorage.getItem("userId"),
  isUserSignedIn: isSignedIn(localStorage.getItem("userId")),
};

const authSlice = createSlice({
  name: "user-slice",
  initialState: initialState,
  reducers: {
    signIn(state, action) {
      const updatedUserId = getPlainUserIdWithoutSpecialChars(
        action.payload.userId
      );
      localStorage.setItem("userId", updatedUserId);
      return {
        userId: updatedUserId,
        isUserSignedIn: isSignedIn(updatedUserId),
      };
    },

    signOut(state) {
      localStorage.removeItem("userId");
      return {
        userId: "",
        isUserSignedIn: false,
      };
    },
  },
});

export const authSliceActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
