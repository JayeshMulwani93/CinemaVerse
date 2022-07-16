import { createSlice } from "@reduxjs/toolkit";

const isSignedIn = (userId) => {
  return userId && userId !== null && userId.length > 0 ? true : false;
};

const initialState = {
  userId: "",
  isUserSignedIn: false,
};

const authSlice = createSlice({
  name: "user-slice",
  initialState: initialState,
  reducers: {
    signIn(state, action) {
        const userId = action.payload.userId;
      return {
        userId: userId,
        isUserSignedIn: isSignedIn(userId),
      };
    },

    signOut() {
      return initialState;
    },
  },
});

export const authSliceActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
