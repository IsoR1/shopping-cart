import React from "react";
import categories from "../data/categories";
import { useParams } from "react-router-dom";

const ShopItem = () => {
  const { category, id } = useParams();
  let item;
  categories.map((el) => {
    Object.keys(el).map((key) => {
      if (el[key].id === id) {
        item = el[key];
      }
    });
  });
  console.log(item.images);

  return (
    <div className="shop-item-container">
      <div className="shop-item">
        <img src={item.images[0]} />
      </div>
    </div>
  );
};

export default ShopItem;
