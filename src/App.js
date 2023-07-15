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
    const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    if (itemIndex !== -1) {
      const updatedList = [...cartItems];
      updatedList[itemIndex].quantity += 1;
      setCartItems(updatedList);
    } else {
      setCartItems([...cartItems, item]);
    }
    console.log(cartItems);
    setCartItemCount(cartItemCount + 1);
  };

  const removeItemFromCart = (item) => {
    const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    if (itemIndex !== -1) {
      const updatedList = [...cartItems];
      if (updatedList[itemIndex].quantity > 1) {
        updatedList[itemIndex].quantity -= 1;
        setCartItems(updatedList);
      } else {
        updatedList.splice(itemIndex, 1);
        setCartItems(updatedList);
        // cartItems.slice(itemIndex, 1);
      }
    }
    console.log(cartItems);
  };

  return (
    <div className="container">
      <Header
        cartItemCount={cartItemCount}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
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
              <Cart
                cartItems={cartItems}
                cartItemCount={cartItemCount}
                removeItemFromCart={removeItemFromCart}
              />
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
