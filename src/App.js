import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import "./App.css";
import { useSearchParams } from "react-router-dom";

const App = () => {
  // const [searchParams, setSearchParams] = useSearchParams({ category: "" });

  return (
    <div className="container">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
