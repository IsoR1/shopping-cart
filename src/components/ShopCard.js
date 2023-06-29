import React from "react";
import Shop from "./Shop";

const ShopCard = ({ props }) => {
  const images = props.images;
  const name = props.name;
  const id = props.id;
  return (
    <div className="shop-card">
      <img src={images[0]} alt={id} />
      <span className="shop-card-span">{name}</span>
    </div>
  );
};

export default ShopCard;
