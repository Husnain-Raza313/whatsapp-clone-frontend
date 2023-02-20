import React from "react";
import { fetchData } from "../api";

const Search = (props) => {
  return (
    <div className="searchBox d-flex align-content-start justify-content-start">
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => props.setQuery(e.target.value)}
        />
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={props.getData}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
