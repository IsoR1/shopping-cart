import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ categories, products }) => {
  // categories.map((el, ind) => {
  //   console.log(el[0].category, ind);
  // });

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     // .then((data) => {
  //     //   const uniqueCategories = data.reduce((acc, prod) => {
  //     //     if (!acc.includes(prod.category)) {
  //     //       acc.push(prod.category);
  //     //     }
  //     //     return acc;
  //     //   }, []);
  //     //   setCategories(uniqueCategories);
  //     // })
  //     // .catch((error) => {
  //     //   console.log("Error fetching products;", error);
  //     // });
  //     .then((data) => console.log(data));
  //   console.log(categories);
  // }, []);

  // const uniqueCategoriesArray = arrayOfObjects.reduce((acc, obj) => {
  //   if (!acc.includes(obj.category)) {
  //     acc.push(obj.category);
  //   }
  //   return acc;
  // }, []);

  // useEffect(() => {
  //   // products.map((prod) => {
  //   //   categoriesSet.add(prod.category);
  //   // });
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://fakestoreapi.com/products/categories"
  //       );
  //       const data = await response.json();

  //       setCategories(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="sidebar-container">
      <div className="sidebar-div" data-testid="sidebar-div">
        {/* {categories.map((el) => (
          <span className="sidebar-option">
            <Link to={`/shop/${el[0].category}`} data-testid={el[0].category}>
              {el[0].category.toUpperCase()}
            </Link>
          </span>
        ))} */}
        {categories.map((el) => {
          const categoryWithHyphen = el.replace(/\s+/g, "-");
          return (
            <span className="sidebar-option">
              <Link to={`/shop/${categoryWithHyphen}`}>{el.toUpperCase()}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
