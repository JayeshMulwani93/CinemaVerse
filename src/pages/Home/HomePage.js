import React, { useEffect, useState } from "react";
import MoviesLayout from "../../components/Movies/MoviesLayout/MoviesLayout";
import {useSelector} from "react-redux";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListHeader from "../../components/Movies/ListHeader/ListHeader";
import useHttp from "../../hooks/use-http";
import { getUserWatchListApi } from "../../api/FirebaseApi";
import WatchListLayout from "../../components/WatchList/WatchListLayout";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LodingSpinner";
import SearchBox from "../../components/UI/Search/SearchBox";
import { DEFAULT_SEARCH_KEY } from "../../AppConstants";

const HomePage = (props) => {
  const authStore = useSelector((state) => state.authStore);
  const isUserSignedIn = authStore.isUserSignedIn;
  const userId = authStore.userId;

  const [watchList, setWatchList] = useState([]);
  const [searchKey, setSearchKey] = useState(DEFAULT_SEARCH_KEY);

  const {
    sendRequest: getWatchList,
    status,
    data,
    error: watchListHasError,
  } = useHttp(getUserWatchListApi, true);

  useEffect(() => {
    getWatchList(userId);
  }, [userId, getWatchList]);

  useEffect(() => {
    if (status === "completed") {
      setWatchList(data);
    }
  }, [status, data]);

  const updateWatchListHandler = (updatedWatchList) => {
    setWatchList(updatedWatchList);
  };

  const moviesHeaderJSX = (
    <div className="row d-flex align-items-center mt-4 mb-4">
      <ListHeader title="Movies" />
      <SearchBox searchKey={searchKey} updateSearchKey={setSearchKey} />
    </div>
  );

  const moviesJSX = (
    <React.Fragment>
      <MoviesLayout
        searchKey={searchKey}
        updateSearchKey={setSearchKey}
        watchList={watchList}
        updateWatchList={updateWatchListHandler}
      />
    </React.Fragment>
  );

  const myListHeaderJSX = (
    <div className="row d-flex align-items-center mt-4 mb-4">
      <ListHeader title="My List" />
    </div>
  );

  const myListErrorJSX = (
    <div>
      <h2>Error Occurred!</h2>
    </div>
  );

  const myListJSX = (
    <WatchListLayout
      watchList={watchList}
      setWatchList={updateWatchListHandler}
    />
  );

  return (
    <div className="container-fluid movie-app">
      {moviesHeaderJSX}
      {moviesJSX}
      {status === "pending" && <LoadingSpinner />}

      {isUserSignedIn === true && myListHeaderJSX}

      {isUserSignedIn === true && watchListHasError === true && myListErrorJSX}

      {isUserSignedIn === true &&
        status === "completed" &&
        watchList &&
        watchList.length > 0 &&
        myListJSX}
    </div>
  );
};

export default HomePage;
