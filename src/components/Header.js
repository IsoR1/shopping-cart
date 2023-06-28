import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="header">
      <div id="header-left-div">
        <h1 className="header-left-h2">Mock Heat Store</h1>
      </div>

      <div id="header-right-div">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
