import React from "react";
import {
  addToWatchListApi,
  removeFromWatchListApi,
} from "../../../api/FirebaseApi";
import MovieFooter from "../MovieFooter/MovieFooter";
import { useDispatch, useSelector } from "react-redux";
import { watchListActions } from "../../../store/watchlist/watchlist-slice";

const MovieList = (props) => {
  const dispatch = useDispatch();
  const watchList = useSelector((store) => store.watchListStore.movies);
  const authStore = useSelector((state) => state.authStore);
  const movies = props.movies;

  const handleFavouritesClick = async (movie, doesWatchListContainMovie) => {
    const requestData = {
      userId: authStore.userId,
      movie: movie,
      watchList: watchList,
    };
    let moviesResponse;
    if (doesWatchListContainMovie) {
      moviesResponse = await removeFromWatchListApi(requestData);
    } else {
      moviesResponse = await addToWatchListApi(requestData);
    }

    dispatch(
      watchListActions.updateWatchList({
        movies: moviesResponse,
      })
    );
  };

  if (movies === undefined || movies === null || movies.length === 0) {
    return (
      <div>
        <h2>No Movies Found!</h2>
      </div>
    );
  }

  const moviesJSX = movies.map((movie) => {
    const doesWatchListContainMovie = isMoviePartOfWatchList(
      movie.imdbID,
      watchList
    );

    return (
      <div
        className="image-container d-flex justify-content-start m-3"
        key={movie.imdbID}
      >
        <img src={movie.Poster} alt="movie" />
        {authStore.isUserSignedIn && (
          <MovieFooter
            movie={movie}
            watchList={props.watchList}
            isMoviePartOfWatchList={doesWatchListContainMovie}
            handleFavouritesClick={handleFavouritesClick.bind(
              null,
              movie,
              doesWatchListContainMovie
            )}
          />
        )}
      </div>
    );
  });
  return <React.Fragment>{moviesJSX}</React.Fragment>;
};

const isMoviePartOfWatchList = (movieId, movies) => {
  if (movies) {
    if (
      movies.filter((currentMovie) => currentMovie.imdbID === movieId)
        .length === 0
    ) {
      return false;
    }
  }
  return true;
};

export default MovieList;
