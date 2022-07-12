import React, { useContext } from "react";
import {
  addToWatchListApi,
  removeFromWatchListApi,
} from "../../../api/FirebaseApi";
import UserContext from "../../../store/user-context";
import MovieFooter from "../MovieFooter/MovieFooter";

const MovieList = (props) => {
  const movies = props.movies;
  const isWatchList = props.isWatchListList;
  const context = useContext(UserContext);
  console.log("Is signed in from movieList", context.isUserSignedIn);

  const handleFavouritesClick = async (
    movie,
    isWatchList,
    doesWatchListContainMovie
  ) => {
    const requestData = {
      userId: context.userId,
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
        {context.isUserSignedIn === true && (
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
