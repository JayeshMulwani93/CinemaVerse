import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./auth/user-slice";
import { watchListReducer } from "./watchlist/watchlist-slice";


const cinemaVerseStore = configureStore({
  reducer: {
    authStore: authSliceReducer,
    watchListStore: watchListReducer,
  },
});

export default cinemaVerseStore;
