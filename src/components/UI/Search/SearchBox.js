import { useContext } from "react";
import SearchContext from "../../../store/movies-context";

const SearchBox = () => {
  const context = useContext(SearchContext);

  const updateSearchHandler = (event) => {
    let searchKey = event.target.value;
    if (!searchKey || searchKey === null || searchKey.length === 0) {
      searchKey = "Star Wars";
    }
    context.setSearchKey(searchKey);
  };

  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        onChange={updateSearchHandler}
      />
    </div>
  );
};

export default SearchBox;
