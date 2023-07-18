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
              price: el[key].price,
              category: el[key].category,
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
            price: filteredCategories[key].price,
            category: filteredCategories[key].category,
          }}
        />
      ));
    }
  };
  return (
    <div className="shop-container">
      <Sidebar />
      <div id="shop-div" data-testid="shop-div">
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;
