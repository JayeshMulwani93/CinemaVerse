import { DEFAULT_SEARCH_KEY } from "../../../AppConstants";

const SearchBox = (props) => {
  const updateSearchHandler = (event) => {
    let searchKey = event.target.value;
    if (!searchKey || searchKey === null || searchKey.length === 0) {
      searchKey = DEFAULT_SEARCH_KEY;
    }
    props.updateSearchKey(searchKey);
  };

  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        onChange={updateSearchHandler}
        placeholder={DEFAULT_SEARCH_KEY}
      />
    </div>
  );
};

export default SearchBox;
