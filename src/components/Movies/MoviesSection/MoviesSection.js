import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoviesLayout.css";
import { getMovies } from "../../../api/OmdbApi";
import useHttp from "../../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner/LodingSpinner";
import Error from "../../Error/Error";

const MoviesSection = (props) => {
  const searchMovie = props.searchKey;
  const [movies, setMovies] = useState([]);
  const { sendRequest, status, data, error: moviesHasError } = useHttp(
    getMovies,
    true
  );

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

  if (moviesHasError) {
    return <Error />;
  }

  return (
    <React.Fragment>
      <div className="row">
        {status === "pending" && <LoadingSpinner />}
        {status !== "pending" && <MovieList movies={movies} />}
      </div>
    </React.Fragment>
  );
};

export default MoviesSection;
