import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { json, useParams } from "react-router-dom";
import ShopCard from "./ShopCard";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useContext(SearchContext);

  const { category } = useParams();

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products;", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterFromQuery = (products, query) => {
    query = query.toLowerCase();
    return products.filter((prod) => prod.title.toLowerCase().includes(query));
  };

  const filterFromCategory = (products, category) => {
    return products.filter(
      (prod) => prod.category === category.replace(/-/g, " ")
    );
  };

  const renderContent = () => {
    const renderShopCard = (prod) => (
      <ShopCard
        props={{
          key: prod.id,
          images: prod.image,
          name: prod.title,
          id: prod.id,
          price: prod.price,
          category: prod.category,
        }}
      />
    );
    let productsToRender = products;

    if (searchQuery) {
      productsToRender = filterFromQuery(products, searchQuery);
    } else if (category) {
      productsToRender = filterFromCategory(products, category);
    }
    return productsToRender.map(renderShopCard);
  };

  return (
    <div id="shop-div" data-testid="shop-div">
      {renderContent()}
    </div>
  );
};

export default Shop;
