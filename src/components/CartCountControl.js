import React from "react";

const CartCountControl = ({ item, count, removeItemFromCart }) => {
  return (
    <div className="cart-count-control-div">
      {/* <span>-</span>
      <br />
      <span>{count}</span>
      <br />
      <span>+</span> */}
      <span onClick={() => removeItemFromCart(item)}>-</span>
      <span>{count}</span>
      <span>+</span>
    </div>
  );
};

export default CartCountControl;
