import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchlist-slice",
  initialState: { movies: [], status: null },
  reducers: {
    updateWatchList(state, action) {
      return {
        ...state,
        movies: action.payload.movies,
      };
    },
    updateWatchListApiStatus(state, action) {
      return {
        ...state,
        status: action.payload.status,
      };
    },
  },
});

export const watchListActions = watchListSlice.actions;
export const watchListReducer = watchListSlice.reducer;
