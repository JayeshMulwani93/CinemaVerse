import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoviesLayout.css";
import { getMovies } from "../../../api/OmdbApi";
import useHttp from "../../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner/LodingSpinner";

const MoviesLayout = (props) => {
  const searchMovie = props.searchKey;
  const [movies, setMovies] = useState([]);
  const {
    sendRequest,
    status,
    data,
    error: moviesHasError,
  } = useHttp(getMovies, true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      let searchKey = searchMovie;
      sendRequest(searchKey);
    }, [500]);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchMovie, sendRequest]);

  useEffect(() => {
    if (status === "completed") {
      setMovies(data);
    }
  }, [status, data]);

  if (moviesHasError === true) {
    return (
      <div>
        <h2>Error occurred while fetching movies!</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        {status === "pending" && <LoadingSpinner />}
        {status !== "pending" && (
          <MovieList
            isWatchList={false}
            movies={movies}
            watchList={props.watchList}
            updateWatchList={props.updateWatchList}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default MoviesLayout;
