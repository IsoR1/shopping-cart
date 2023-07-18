import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { render } from "@testing-library/react";

const Cart = ({
  cartItems,
  cartItemCount,
  removeItemFromCart,
  addItemToCart,
}) => {
  const renderContent = () => {
    return cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        name={item.name}
        price={item.price}
        image={item.images[0]}
        count={item.quantity}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    ));
  };

  useEffect(() => {
    renderContent();
  }, [cartItems]);

  return (
    // <div className="cart-container">
    <div className="cart-items">{renderContent()}</div>
  );
};

export default Cart;
