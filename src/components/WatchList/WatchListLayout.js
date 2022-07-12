import React from "react";
import MovieList from "../Movies/MovieList/MovieList";

const WatchListLayout = (props) => {
  const watchList = props.watchList;

  return (
    <React.Fragment>
      <div className="row">
        <MovieList
          isWatchList={true}
          movies={watchList}
          watchList={watchList}
          updateWatchList={props.setWatchList}
        />
      </div>
    </React.Fragment>
  );
};
export default WatchListLayout;
