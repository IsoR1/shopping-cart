import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = ({
  cartItemCount,
  addItemToCart,
  removeItemFromCart,
  searchInput,
  setSearchInput,
}) => {
  return (
    <>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            {
              <Search
                setSearchInput={setSearchInput}
                searchInput={searchInput}
              />
            }
          </li>
          <li className="header-li">
            <Link to="/shop" data-testid="shop-link">
              Shop
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="/cart"
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            >
              Cart <span>{cartItemCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
