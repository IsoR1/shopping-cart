import React from "react";

const Cart = ({ cartItems, cartItemCount }) => {
  console.log(cartItems);

  return <div className="cart-container">{cartItemCount}</div>;
};

export default Cart;
