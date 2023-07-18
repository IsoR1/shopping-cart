import React from "react";

const CartCountControl = ({
  item,
  count,
  removeItemFromCart,
  addItemToCart,
}) => {
  return (
    <div className="cart-count-control-div">
      <button type="button" onClick={() => removeItemFromCart(item)}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => addItemToCart(item)}>
        +
      </button>
    </div>
  );
};

export default CartCountControl;
