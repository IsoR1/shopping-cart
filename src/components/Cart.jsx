import React, { useEffect } from "react";
import CartItem from "./CartItem";
import CartOrderSummary from "./CartOrderSummary";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ShopItem from "./ShopItem";

const Cart = ({}) => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  let cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderContent = () => {
    if (cartItems.length > 0) {
      return (
        <>
          <CartOrderSummary total={cartTotal} />
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              name={item.title}
              price={item.price}
              image={item.image}
              count={item.quantity}
              removeItemFromCart={removeItemFromCart}
              addItemToCart={addItemToCart}
            />
          ))}
        </>
      );
    } else {
      return (
        <div className="empty-cart-div" data-testid="cartTestIdP">
          <p>
            Your cart is empty. Click <Link to={"/shop"}> here </Link> to visit
            the shop!
          </p>
        </div>
      );
    }
  };
  return (
    <>
      {cartItems.length > 0 && (
        <div className="cart-items">{renderContent()}</div>
      )}
      {cartItems.length === 0 && (
        <div className="empty-cart-container">{renderContent()} </div>
      )}
    </>
  );
};

export default Cart;
