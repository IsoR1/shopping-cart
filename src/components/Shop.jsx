import React, { useState, useEffect } from "react";
import categories from "../data/categories";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { json, useParams } from "react-router-dom";
import ShopCard from "./ShopCard";
// ADDED ALL PRODUCTS STOPPED RENDERING FROM PRODUCTS
const Shop = ({
  searchInput,
  products,
  setProducts,
  allProducts,
  setAllProducts,
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { category } = useParams();

  // const filteredCategories = categories.find(
  //   (el) => el[0].category === category
  // );

  // if (category) {
  //   console.log("categorys:", category);
  // }
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      // console.log("new cat: ");
    } else if (!category) {
      setProducts(allProducts);
    }

    // test
    console.log(category, "cat");
    if (typeof category === "undefined") {
      setProducts(allProducts);
    }
  }, [category]);

  useEffect(() => {
    // categories.map((el) => {
    //   Object.keys(el).map((key) =>
    //     // <ShopCard
    //     //   props={{

    //     //   }}
    //     // />
    //     // console.log(el[key])
    //     );
    //   });
    console.log("searchInput changed:", searchInput);
  }, [searchInput]);

  useEffect(() => {
    // let filteredProducts = products;
    console.log("l");
    console.log("products: ", allProducts);
    console.log(selectedCategory);
    if (selectedCategory) {
      const filteredProducts = allProducts.filter(
        (prod) => prod.category === selectedCategory.replace(/-/g, " ")
      );

      console.log("filtered", filteredProducts);

      setProducts(filteredProducts);
    }
  }, [selectedCategory, setProducts]);

  const renderContent = () => {
    // if (selectedCategory) {
    //   console.log("yes");
    //   console.log("testing test test: ", selectedCategory);
    //   return products
    //     .filter((prod) => prod.category === selectedCategory)
    //     .map((prod) => (
    //       <ShopCard
    //         props={{
    //           key: prod.id,
    //           images: prod.image,
    //           name: prod.title,
    //           id: prod.id,
    //           price: prod.price,
    //           category: prod.category,
    //         }}
    //       />
    //     ));
    // } else {
    // console.log(prod.category);
    return products.map((prod) => (
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
    ));
    // }
  };

  return (
    <div className="shop-container" data-testid="shop-con">
      <Sidebar categories={categories} products={products} />
      <div id="shop-div" data-testid="shop-div">
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;

// const renderContent = () => {
// Render all shop items
// if (!filteredCategories) {
//   return categories.map((el) =>
//     Object.keys(el).map((key) => (
//       <ShopCard
//         props={{
//           images: el[key].images,
//           name: el[key].name,
//           id: el[key].id,
//           price: el[key].price,
//           category: el[key].category,
//         }}
//       />
//     ))
//   );
// }
// // Render search item
// if (searchInput) {
//   return categories.map((el) => {
//     Object.keys(el).map(
//       (key) =>
//         el[key].name.includes(searchInput) && (
//           <ShopCard
//             props={{
//               images: el[key].images,
//               name: el[key].name,
//               id: el[key].id,
//               price: el[key].price,
//               category: el[key].category,
//             }}
//           />
//         )
//     );
//   });
// }
// // Render category that's clicked in the sidebar
// if (filteredCategories) {
//   return Object.keys(filteredCategories).map((key) => (
//     <ShopCard
//       props={{
//         images: filteredCategories[key].images,
//         name: filteredCategories[key].name,
//         id: filteredCategories[key].id,
//         price: filteredCategories[key].price,
//         category: filteredCategories[key].category,
//       }}
//     />
//   ));
// }
// };

// OLD WAY

// useEffect(() => {
//   let url = "https://fakestoreapi.com/products";

//   // Check if a category is selected
//   if (category) {
//     url = `https://fakestoreapi.com/products/category/${category.replace(
//       /-/g,
//       " "
//     )}`;
//   }

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const modifiedData = data.map((el) => ({
//         ...el,
//         quantity: 1,
//       }));
//       setProducts(modifiedData);
//       // console.log(modifiedData);
//     })
//     .catch((error) => {
//       console.log("Error fetching products;", error);
//     });
// }, [category]);

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data))
//     .catch((error) => {
//       console.log("Error fetching products;", error);
//     });
// }, []);

// if (category) {
// useEffect(() => {
//   fetch(
//     `https://fakestoreapi.com/products/category/${category.replace(
//       /-/g,
//       " "
//     )}`
//   )
//     .then((res) => res.json())
//     .then((data) => setProducts(data));
//   console.log("test");
// }, [category]);

// }

// const renderContent = () => {
// if (category) {
//   // products.map((prod) => {
//   //   // if (prod.category.replace(/\s+/g, "-") === category) {
//   //   // <ShopCard
//   //   //   props={{
//   //   //     images: prod.image,
//   //   //     name: prod.title,
//   //   //     id: prod.id,
//   //   //     price: prod.price,
//   //   //     category: prod.category,
//   //   //   }}
//   //   // />;
//   //   console.log(prod.category);
//   //   // }
//   // });
//   fetch(
//     `https://fakestoreapi.com/products/category/${category.replace(
//       /-/g,
//       " "
//     )}`
//   )
//     .then((res) => res.json())
//     .then((data) => setProducts(data));
//   console.log("test");
// }

// return products.map((prod) => (
//   <ShopCard
//     props={{
//       images: prod.image,
//       name: prod.title,
//       id: prod.id,
//       price: prod.price,
//       category: prod.category,
//     }}
//   />
// ));
// };
