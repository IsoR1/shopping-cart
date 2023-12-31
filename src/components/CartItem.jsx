import React from "react";
import CartCountControl from "./CartCountControl";

const CartItem = ({
  item,
  name,
  image,
  price,
  count,
  removeItemFromCart,
  addItemToCart,
}) => {
  return (
    <div className="cart-card">
      <img src={image} className="cart-image" alt={name} />
      <div className="cart-card-span-info">
        <span>${price}</span>
        <span>
          {
            <CartCountControl
              item={item}
              count={count}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}
            />
          }
        </span>
      </div>
    </div>
  );
};

export default CartItem;
