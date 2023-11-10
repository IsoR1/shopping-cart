import React, { useState, useEffect } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
import "./App.css";
import Router from "./Router";
import { CartContext } from "./contexts/CartContext";
import { ProductsContext } from "./contexts/ProductsContext";
import { SearchContext } from "./contexts/SearchContext";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const addToCart = (item) => {
    const productsIndex = cartItems.findIndex((el) => el.id === item.id);
    if (productsIndex !== -1) {
      const updatedList = [...cartItems];
      updatedList[productsIndex].quantity += 1;

      setCartItems(updatedList);
    } else {
      item.quantity = 1;
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item) => {
    const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    if (itemIndex !== -1) {
      const updatedList = [...cartItems];
      if (updatedList[itemIndex].quantity > 1) {
        updatedList[itemIndex].quantity -= 1;
        setCartItems(updatedList);
      } else if (updatedList[itemIndex].quantity === 1) {
        updatedList.splice(itemIndex, 1);
        setCartItems(updatedList);
      }
    }
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSearchInput }}>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        <Router />
      </CartContext.Provider>
    </SearchContext.Provider>
  );
};

export default App;
