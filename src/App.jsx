import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  // CHANGE CART CONTROL COUNT TO BE LENGTH OF CART ITEMS
  // MAYBE CHANGE CART ITEMS TO ONLY CONTAIN IDS
  // FIX SOMETIMES PRODUCTS BEING EMPTY
  // IMPLEMENT SEARCH
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [total, setTotal] = useState(0);

  const addItemToCart = (item) => {
    const productsIndex = cartItems.findIndex((el) => el.id === item.id);
    const itemInAll = allProducts.findIndex((el) => el.id === item.id);
    if (productsIndex !== -1) {
      const updatedList = [...cartItems];
      updatedList[productsIndex].quantity += 1;

      setCartItems(updatedList);
      console.log(cartItems);
    } else {
      item.quantity = 1;
      setCartItems([...cartItems, item]);
    }
    setCartItemCount(cartItemCount + 1);
    setTotal(parseFloat((total + item.price).toFixed(2)));
  };

  const removeItemFromCart = (item) => {
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
    setCartItemCount(cartItemCount - 1);
    setTotal(parseFloat((total - item.price).toFixed(2)));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   let url = "https://fakestoreapi.com/products";

  //   // Check if a category is selected
  //   if (selectedCategory) {
  //     url = `https://fakestoreapi.com/products/category/${selectedCategory.replace(
  //       /-/g,
  //       " "
  //     )}`;
  //   }

  //   // console.log("this is the selected category: ", selectedCategory);
  //   // console.log(products);
  //   // fetch(url)
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     const modifiedData = data.map((el) => ({
  //   //       ...el,
  //   //       quantity: 1,
  //   //     }));
  //   //     setProducts(modifiedData);
  //   //     // console.log(modifiedData);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log("Error fetching products;", error);
  //   //   });
  // }, [selectedCategory]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products;", error);
      });
  }, []);

  return (
    <div className="container">
      <Header
        cartItemCount={cartItemCount}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/shop"
            element={
              <Shop
                setCartItems={setCartItems}
                searchQuery={searchQuery}
                setProducts={setProducts}
                products={products}
                categories={categories}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
              />
            }
          />
          <Route
            path="/shop/:category"
            element={
              <Shop
                categories={categories}
                products={products}
                setProducts={setProducts}
                setCartItems={setCartItems}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
              />
            }
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
                addItemToCart={addItemToCart}
                total={total}
              />
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
