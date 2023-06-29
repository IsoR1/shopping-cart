import React, { useState, useEffect } from "react";
import categories from "../data/categories";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";
import ShopCard from "./ShopCard";

const Shop = () => {
  const { category } = useParams();
  const filteredCategories = categories.find(
    (el) => el[0].category === category
  );
  const renderContent = () => {
    // Render all shop items
    if (!filteredCategories) {
      return categories.map((el) =>
        Object.keys(el).map((key) => (
          <ShopCard
            props={{
              images: el[key].images,
              name: el[key].name,
              id: el[key].id,
            }}
          />
        ))
      );
    }

    // Render category that's clicked in the sidebar
    if (filteredCategories) {
      return Object.keys(filteredCategories).map((key) => (
        <ShopCard
          props={{
            images: filteredCategories[key].images,
            name: filteredCategories[key].name,
            id: filteredCategories[key].id,
          }}
        />
      ));
    }
  };
  return (
    <div className="shop-container">
      <Sidebar />
      <div id="shop-div">{renderContent()}</div>
    </div>
  );
};

export default Shop;
