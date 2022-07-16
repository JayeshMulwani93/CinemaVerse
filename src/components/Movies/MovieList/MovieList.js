import React from "react";
import {
  addToWatchListApi,
  removeFromWatchListApi,
} from "../../../api/FirebaseApi";
import MovieFooter from "../MovieFooter/MovieFooter";
import { useSelector } from "react-redux";

const MovieList = (props) => {
  const authStore = useSelector((state) => state.authStore);
  const movies = props.movies;
  const isWatchList = props.isWatchList;

  const handleFavouritesClick = async (
    movie,
    isWatchList,
    doesWatchListContainMovie
  ) => {
    const requestData = {
      userId: authStore.userId,
      movie: movie,
      watchList: props.watchList,
    };
    let moviesResponse;
    if (isWatchList === true || doesWatchListContainMovie === true) {
      moviesResponse = await removeFromWatchListApi(requestData);
    } else {
      moviesResponse = await addToWatchListApi(requestData);
    }
    props.updateWatchList(moviesResponse);
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
      props.watchList
    );

    return (
      <div
        className="image-container d-flex justify-content-start m-3"
        key={movie.imdbID}
      >
        <img src={movie.Poster} alt="movie" />
        {authStore.isUserSignedIn === true && (
          <MovieFooter
            movie={movie}
            watchList={props.watchList}
            isWatchList={isWatchList}
            isMoviePartOfWatchList={doesWatchListContainMovie}
            handleFavouritesClick={handleFavouritesClick.bind(
              null,
              movie,
              isWatchList,
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
