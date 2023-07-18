import React, { useEffect } from "react";
import categories from "../data/categories";
import { Link } from "react-router-dom";

const Sidebar = () => {
  categories.map((el, ind) => {
    console.log(el[0].category, ind);
  });
  return (
    <div className="sidebar-container">
      <div className="sidebar-div" data-testid="sidebar-div">
        {categories.map((el) => (
          <span className="sidebar-option">
            <Link to={`/shop/${el[0].category}`} data-testid={el[0].category}>
              {el[0].category.toUpperCase()}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
