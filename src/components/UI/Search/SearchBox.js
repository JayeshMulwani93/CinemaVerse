import { useContext } from "react";
import SearchContext from "../../../store/movies-context";

const SearchBox = () => {
  const context = useContext(SearchContext);

  const updateSearchHandler = (event) => {
    context.setSearchKey(event.target.value);
  };

  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={context.searchKey}
        onChange={updateSearchHandler}
      />
    </div>
  );
};

export default SearchBox;
