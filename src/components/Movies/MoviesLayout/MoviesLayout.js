import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../../store/movies-context";
import ListHeader from "../ListHeader/ListHeader";
import MovieList from "../MovieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoviesLayout.css";
import SearchBox from "../../UI/Search/SearchBox";
import { getMovies } from "../../../api/OmdbApi";
import useHttp from "../../../hooks/use-http";

const MoviesLayout = (props) => {
  const context = useContext(SearchContext);
  const searchMovie = context.searchKey;
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
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeader title="Movies" />
        <SearchBox />
      </div>

      <div className="row">
        {status === "pending" && <h2>Loading Movies!</h2>}
        {status !== "pending" && (
          <MovieList
            isWatchListList={false}
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
