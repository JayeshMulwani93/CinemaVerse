import React, { useState } from "react";

const defaultValue = { searchKey: "" };

const SearchContext = React.createContext(defaultValue);

export const MoviesContextProvider = (props) => {
  const [searchValue, setSearchValue] = useState("Star Wars");

  return (
    <SearchContext.Provider
      value={{
        searchKey: searchValue,
        setSearchKey: setSearchValue,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
