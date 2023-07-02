import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shop/:category/:id" element={<ShopItem />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
