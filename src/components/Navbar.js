import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="header-ul">
          <li className="header-li">{<Search />}</li>
          <li className="header-li">
            {/* <Link>Search</Link> */}
            {/* Search */}
            <Link to="/shop">Shop</Link>
          </li>
          <li className="header-li">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
