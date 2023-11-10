import React, { useCallback, useContext, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ShopItem from "./ShopItem";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            {
              <Search
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
              />
            }
          </li>
          <li className="header-li">
            <Link to="/shop" data-testid="shop-link">
              Shop
            </Link>
          </li>
          <li className="header-li">
            <Link to="/cart">
              Cart {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
