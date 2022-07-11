import React, { useContext } from "react";
import {
  addToWatchListApi,
  removeFromWatchListApi,
} from "../../../api/FirebaseApi";
import UserContext from "../../../store/user-context";
import AddToWatchList from "../../Favorites/AddToWatchList";
import RemoveFromWatchList from "../../Favorites/RemoveFromWatchList";

const MovieList = (props) => {
  const movies = props.movies;
  const isWatchList = props.isWatchListList;
  const context = useContext(UserContext);

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

  const handleFavouritesClick = async (movie, isWatchList) => {
    const requestData = {
      userId: context.userId,
      movie: movie,
      watchList: props.watchList,
    };
    let moviesResponse;
    if (isWatchList === "false") {
      moviesResponse = await addToWatchListApi(requestData);
    } else {
      moviesResponse = await removeFromWatchListApi(requestData);
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

  return (
    <React.Fragment>
      {movies.length > 0 &&
        movies.map((movie) => (
          <div
            className="image-container d-flex justify-content-start m-3"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={handleFavouritesClick.bind(null, movie, isWatchList)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              {isWatchList === "false" &&
                !isMoviePartOfWatchList(movie.imdbID, props.watchList) && (
                  <AddToWatchList />
                )}
              {isWatchList === "true" && <RemoveFromWatchList />}
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default MovieList;
