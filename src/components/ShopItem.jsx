import React from "react";
import categories from "../data/categories";
import { useParams } from "react-router-dom";

const ShopItem = ({ addItemToCart }) => {
  const { category, id } = useParams();
  let item;
  categories.map((el) => {
    Object.keys(el).map((key) => {
      if (el[key].id === id) {
        item = el[key];
      }
    });
  });

  return (
    <div className="product-container">
      <div className="product">
        <img
          src={item.images[0]}
          alt={item.id}
          className={"product-image active-img"}
        />
        <div className="product-details-container">
          <div className="product-details">
            <span className="product-details-span details-name">
              {item.name}
            </span>
            <span className="product-details-span details-price">
              $ {item.price}
            </span>
            <button onClick={() => addItemToCart(item)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
