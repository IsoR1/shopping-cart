import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-div">
      <h2 className="main-h2">Mock Store</h2>
      <p className="main-p">
        Welcome to the one stop shop for whatever you need
      </p>
      <Link to={"/shop"} className="main-link">
        Enter
      </Link>
    </div>
  );
};

export default Main;
