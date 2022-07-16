import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "../../components/UI/Search/SearchBox";
import { DEFAULT_SEARCH_KEY } from "../../AppConstants";
import WatchListSection from "../../components/Movies/WatchListSection/WatchListSection";
import ListHeader from "../../components/UI/ListHeader/ListHeader";
import MoviesSection from "../../components/Movies/MoviesSection/MoviesSection";

const HomePage = () => {
  const [searchKey, setSearchKey] = useState(DEFAULT_SEARCH_KEY);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeader title="Movies" />
        <SearchBox searchKey={searchKey} updateSearchKey={setSearchKey} />
      </div>
      <MoviesSection
        searchKey={searchKey}
        updateSearchKey={setSearchKey}
        watchList={[]}
      />
      <WatchListSection />
    </div>
  );
};

export default HomePage;
