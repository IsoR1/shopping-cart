import React from "react";

const CartCountControl = ({
  item,
  count,
  removeItemFromCart,
  addItemToCart,
}) => {
  return (
    <div className="cart-count-control-div">
      <span onClick={() => removeItemFromCart(item)}>-</span>
      <span>{count}</span>
      <span onClick={() => addItemToCart(item)}>+</span>
    </div>
  );
};

export default CartCountControl;
