import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="header-li">
            {/* <Link>Search</Link> */}
            Search
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
