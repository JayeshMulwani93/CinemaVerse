import React from "react";
import AddToWatchList from "../../WatchList/AddToWatchList";
import RemoveFromWatchList from "../../WatchList/RemoveFromWatchList";

const MovieFooter = (props) => {
  let footerComponentJSX;

  if (props.isWatchList === true || props.isMoviePartOfWatchList === true) {
    footerComponentJSX = <RemoveFromWatchList />;
  } else {
    footerComponentJSX = <AddToWatchList />;
  }

  return (
    <React.Fragment>
      <div
        onClick={props.handleFavouritesClick}
        className="overlay d-flex align-items-center justify-content-center"
      >
        {footerComponentJSX}
      </div>
    </React.Fragment>
  );
};

export default MovieFooter;
