import React, { useState, useEffect } from "react";
import categories from "../data/categories";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const filteredCategories = categories.find(
    (el) => el[0].category === category
  );
  const renderContent = () => {
    if (!filteredCategories) {
      return categories.map((el) =>
        Object.keys(el).map((key) => (
          <div className="shop-card">
            <img src={el[key].images[0]} alt={el[key].id} />
            <span className="shop-card-span">{el[key].name}</span>
          </div>
        ))
      );
    }

    if (filteredCategories) {
      return Object.keys(filteredCategories).map((key) => (
        <div className="shop-card">
          <img
            src={filteredCategories[key].images[0]}
            alt={filteredCategories[key].id}
          />
          <span className="shop-card-span">{filteredCategories[key].name}</span>
        </div>
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
