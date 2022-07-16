import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./user-slice";

const cinemaVerseStore = configureStore({
  reducer: {
    authStore: authSliceReducer,
  },
});

export default cinemaVerseStore;