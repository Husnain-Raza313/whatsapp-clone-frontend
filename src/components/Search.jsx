import React from "react";

const Search = (props) => {
  const searchContacts = async (e) => {
    props.setQuery(e.target.value);

    if (e.target.value.length == 1 && e.code == "Backspace") {
      props.getData();
    }
  };

  return (
    <div className="searchBox d-flex align-content-start justify-content-start">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onKeyDown={(e) => searchContacts(e)}
        />
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={props.getData}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
