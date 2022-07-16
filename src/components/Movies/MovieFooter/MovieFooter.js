import React from "react";
import AddToWatchList from "../AddToWatchList/AddToWatchList";
import RemoveFromWatchList from "../RemoveFromWatchList/RemoveFromWatchList";

const MovieFooter = (props) => {
  let footerComponentJSX;

  if (props.isMoviePartOfWatchList) {
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
