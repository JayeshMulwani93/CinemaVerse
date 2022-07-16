import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";
import ListHeader from "../../UI/ListHeader/ListHeader";
import LoadingSpinner from "../../UI/LoadingSpinner/LodingSpinner";
import Error from "../../Error/Error";
import loadWatchListThunk from "../../../store/watchlist/watchlist-actions";

const WatchListSection = () => {
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);
  const watchListStore = useSelector((state) => state.watchListStore);

  useEffect(() => {
    dispatch(loadWatchListThunk(authStore.userId));
  }, [authStore.userId, loadWatchListThunk]);

  if (authStore.isUserSignedIn) {
    if (watchListStore.status === "pending") {
      return <LoadingSpinner />;
    } else {
      if (watchListStore.status === "error") {
        return <Error />;
      } else if (watchListStore.movies && watchListStore.movies.length > 0) {
        return (
          <React.Fragment>
            <div className="row d-flex align-items-center mt-4 mb-4">
              <ListHeader title="My List" />
            </div>
            <div className="row">
              <MovieList movies={watchListStore.movies} />
            </div>
          </React.Fragment>
        );
      }
    }
  }
  return <div></div>;
};

export default WatchListSection;
