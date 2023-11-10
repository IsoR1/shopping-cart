import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import CartContext from "./CartContext";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
// import { CartContextProvider, cartContext } from "../contexts/CartContext";

const ShopItem = () => {
  const { category, id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext);
  const [data, setData] = useState([]);

  fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="product-container">
      <div className="product">
        <img
          src={data.image}
          alt={data.id}
          className={"product-image active-img"}
        />
        <div className="product-details-container">
          <div className="product-details">
            <span className="product-details-span details-name">
              {data.name}
            </span>
            <span className="product-details-span details-price">
              $ {data.price}
            </span>
            <button className="add-to-cart-btn" onClick={() => addToCart(data)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
