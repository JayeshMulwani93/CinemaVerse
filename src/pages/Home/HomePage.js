import React, { useContext, useEffect, useState } from "react";
import MoviesLayout from "../../components/Movies/MoviesLayout/MoviesLayout";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../../store/user-context";
import ListHeader from "../../components/Movies/ListHeader/ListHeader";
import useHttp from "../../hooks/use-http";
import { getUserWatchListApi } from "../../api/FirebaseApi";
import WatchListLayout from "../../components/WatchList/WatchListLayout";
import SignIn from "../../components/SignIn/SignIn";
import Logout from "../../components/SignIn/Logout";

const HomePage = (props) => {
  const context = useContext(UserContext);
  console.log("IS signedIn?", context.isUserSignedIn);

  const userId = context.userId;
  const [watchList, setWatchList] = useState([]);
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

  return (
    <div className="container-fluid movie-app">
      <MoviesLayout
        watchList={watchList}
        updateWatchList={updateWatchListHandler}
      />

      {context.isUserSignedIn === true && status === "pending" && (
        <div>
          <h2>Loading watchList!</h2>
        </div>
      )}

      <div className="align-items-center mt-4 mb-4">
        {context.isUserSignedIn === false && <SignIn />}
        {context.isUserSignedIn === true && <Logout />}
      </div>

      {context.isUserSignedIn === true &&
        status !== "pending" &&
        watchList &&
        watchList.length > 0 && (
          <React.Fragment>
            <div className="row d-flex align-items-center mt-4 mb-4">
              <ListHeader title="WatchList" />
            </div>
            {watchListHasError && (
              <div>
                <h2>Error Occurred!</h2>
              </div>
            )}
            {!watchListHasError && (
              <WatchListLayout
                watchList={watchList}
                setWatchList={updateWatchListHandler}
              />
            )}
          </React.Fragment>
        )}
    </div>
  );
};

export default HomePage;
