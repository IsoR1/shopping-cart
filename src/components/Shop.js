import React, { useState, useEffect } from "react";
import categories from "../data/categories";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";

// const Shop = ({ setSearchParams }) => {
const Shop = () => {
  // const filteredCategory = categories.find((el) => el[0].category === category);

  // const location = useLocation();
  const { category } = useParams();
  const filteredCategories = categories.find(
    (el) => el[0].category === category
  );
  const renderContent = () => {
    if (filteredCategories) {
      return Object.keys(filteredCategories).map((key) => (
        //   Object.keys(el).map(
        //     (key) => console.log(el[key])
        <div className="shop-card">
          <img src={filteredCategories[key].images[0]} />
          <span className="shop-card-span">{filteredCategories[key].name}</span>
        </div>
      ));
    }
    // if (cat === "hats") {
    // {
    //   categories.map((el) =>
    //     Object.keys(el).map((key) => (
    //       <div className="shop-card">
    //         <img src={el[key].images[0]} />
    //         <span className="shop-card-span">{el[key].name}</span>
    //       </div>
    //     ))
    //   );
    // }
    // console.log(type);
    // }
  };
  return (
    <div className="shop-container">
      <Sidebar />
      <div id="shop-div">
        {/* {categories.map((el) =>
          Object.keys(el).map((key) => (
            <div className="shop-card">
              <img src={el[key].images[0]} />
              <span className="shop-card-span">{el[key].name}</span>
            </div>
          )) */}
        {/* )} */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;
