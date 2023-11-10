import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = ({
  cartItemCount,
  addItemToCart,
  removeItemFromCart,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div id="header">
      <div id="header-left-div">
        <h1 className="header-left-h1">Mock Store</h1>
      </div>

      <div id="header-right-div">
        <Navbar
          cartItemCount={cartItemCount}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default Header;
