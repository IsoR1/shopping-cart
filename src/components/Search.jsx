import React, { useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../contexts/SearchContext";

const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const { handleSearchInput } = useContext(SearchContext);

  const toggleClass = () => {
    !searchClicked ? setSearchClicked(true) : setSearchClicked(false);
  };
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className={`${searchClicked ? "active" : ""}`}
          onChange={(e) => handleSearchInput(e)}
        />
        <div className={`icon ${searchClicked ? "active" : ""}`}>
          <FontAwesomeIcon
            data-testid={"search-icon"}
            icon={faSearch}
            className="i-fa"
            onClick={toggleClass}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
