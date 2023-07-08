import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="container">
      <Header cartItemCount={cartItemCount} />
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop setCartItems={setCartItems} />} />
          <Route
            path="/shop/:category"
            element={<Shop setCartItems={setCartItems} />}
          />
          <Route
            path="/shop/:category/:id"
            element={<ShopItem addItemToCart={addItemToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} cartItemCount={cartItemCount} />
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
