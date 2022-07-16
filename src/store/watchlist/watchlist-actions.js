import { getUserWatchListApi } from "../../api/FirebaseApi";
import { watchListActions } from "./watchlist-slice";

const loadWatchListThunk = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(
        watchListActions.updateWatchListApiStatus({
          status: "pending",
        })
      );
      const watchList = await getUserWatchListApi(userId);
      dispatch(
        watchListActions.updateWatchList({
          movies: watchList,
        })
      );
      dispatch(
        watchListActions.updateWatchListApiStatus({
          status: "completed",
        })
      );
    } catch (error) {
      console.log("error occurred while loading watchlist!");
      dispatch(
        watchListActions.updateWatchListApiStatus({
          status: "error",
        })
      );
    }
  };
};

export default loadWatchListThunk;
