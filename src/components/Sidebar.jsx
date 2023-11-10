import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sidebar-con">
      <div className="sidebar-div" data-testid="sidebar-div">
        {categories.map((el) => {
          return (
            <span className="sidebar-option">
              <Link to={`/shop/${el}`}>{el.toUpperCase()}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
