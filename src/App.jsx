import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const addItemToCart = (item) => {
    // const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    // if (itemIndex !== -1) {
    //   const updatedList = [...cartItems];
    //   updatedList[itemIndex].quantity += 1;
    //   setCartItems(updatedList);
    // } else {
    //   setCartItems([...cartItems, item]);
    // }

    // setCartItemCount(item.quantity + 1);
    // console.log("item id", item.id);
    // console.log(item);

    const productsIndex = cartItems.findIndex((el) => el.id === item.id);
    const itemInAll = allProducts.findIndex((el) => el.id === item.id);
    if (productsIndex !== -1) {
      const updatedList = [...cartItems];
      updatedList[productsIndex].quantity += 1;
      // setProducts(updatedProducts);

      // console.log("index");
      // console.log(updatedList);
      setCartItems(updatedList);
      console.log(cartItems);
    } else {
      item.quantity = 1;
      setCartItems([...cartItems, item]);

      // CHANGE THIS TOMORROW
      console.log(products);
      console.log("break");
      console.log(cartItems);
    }

    // setAllProducts(...allProducts, (itemInAll.quantity = itemInAll.quantity++));
    // console.log("this is cart items:", cartItems);
    // console.log(item);
    // setCartItemCount(cartItemCount + 1);
  };

  const removeItemFromCart = (item) => {
    const itemIndex = cartItems.findIndex((el) => el.id === item.id);
    if (itemIndex !== -1) {
      const updatedList = [...cartItems];
      if (updatedList[itemIndex].quantity > 1) {
        updatedList[itemIndex].quantity -= 1;
        setCartItems(updatedList);
      } else {
        updatedList.splice(itemIndex, 1);
        setCartItems(updatedList);
      }
    }
    setCartItemCount(cartItemCount - 1);
    console.log(cartItems);
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

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    // Check if a category is selected
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory.replace(
        /-/g,
        " "
      )}`;
    }

    // console.log("this is the selected category: ", selectedCategory);
    // console.log(products);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const modifiedData = data.map((el) => ({
    //       ...el,
    //       quantity: 1,
    //     }));
    //     setProducts(modifiedData);
    //     // console.log(modifiedData);
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching products;", error);
    //   });
  }, [selectedCategory]);

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
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/shop"
            element={
              <Shop
                setCartItems={setCartItems}
                searchInput={searchInput}
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
              />
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
