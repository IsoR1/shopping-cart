import React from "react";
import Shop from "./Shop";
import { Link } from "react-router-dom";

const ShopCard = ({ props }) => {
  const { images, name, id, price, category } = props;
  return (
    <div className="shop-card" data-testid="shop-card">
      <Link to={`/shop/${category}/${id}`} className="shop-card-a">
        <div className="shop-card-img-div">
          <img src={images} alt={id} className="shop-card-img" />
        </div>
        <div className="shop-card-details">
          <span className="shop-card-span-name">{name}</span>
          <span className="shop-card-span-price">$ {price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
