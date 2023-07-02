import React from "react";
import Shop from "./Shop";
import { Link } from "react-router-dom";

const ShopCard = ({ props }) => {
  const { images, name, id, price, category } = props;
  return (
    <div className="shop-card">
      <Link to={`/shop/${category}/${id}`} className="shop-card-a">
        <img src={images[0]} alt={id} className="shop-card-img" />
        <span className="shop-card-span-name">{name}</span>
        <span className="shop-card-span-price">{price}</span>
      </Link>
    </div>
  );
};

export default ShopCard;
