import React, { useEffect } from "react";
import categories from "../data/categories";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {categories.map((el) => (
        <span className="sidebar-option">
          <Link
            to={`/shop/${el[0].category}`}
            // onClick={() => setSearchParams(el[0].category)}
            // onClick={() => setSearchParams({ category: "s" })}
            onClick={(e) => {
              // setsp({ q: "m" });
            }}
          >
            {el[0].category.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Sidebar;
