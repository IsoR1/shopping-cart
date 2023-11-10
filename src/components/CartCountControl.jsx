import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Cart from "./Cart";

const CartCountControl = ({ item, count }) => {
  const { removeFromCart, addToCart, cartItems } = useContext(CartContext);
  return (
    <div className="cart-count-control-div">
      <button type="button" onClick={() => removeFromCart(item)}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => addToCart(item)}>
        +
      </button>
    </div>
  );
};

export default CartCountControl;
