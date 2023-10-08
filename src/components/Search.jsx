import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearchQuery, searchQuery }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const toggleClass = () => {
    !searchClicked ? setSearchClicked(true) : setSearchClicked(false);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    console.log("this is the search query:", searchQuery);
    // console.log("this is the search query:", e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className={`${searchClicked ? "active" : ""}`}
          onChange={(e) => handleInput(e)}
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
