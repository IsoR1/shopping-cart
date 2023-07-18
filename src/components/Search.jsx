import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);
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
        />
        <div className={`icon ${searchClicked ? "active" : ""}`}>
          <FontAwesomeIcon
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
