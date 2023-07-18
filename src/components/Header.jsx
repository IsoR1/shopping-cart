import React from "react";
import Navbar from "./Navbar";

const Header = ({ cartItemCount, addItemToCart, removeItemFromCart }) => {
  return (
    <div id="header">
      <div id="header-left-div">
        <h1 className="header-left-h1">Mock Heat Store</h1>
      </div>

      <div id="header-right-div">
        <Navbar
          cartItemCount={cartItemCount}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </div>
    </div>
  );
};

export default Header;
