import React, { useEffect, useState } from "react";
import categories from "../data/categories";
import { useParams } from "react-router-dom";

const ShopItem = ({ addItemToCart }) => {
  const { category, id } = useParams();
  // let item;
  // categories.map((el) => {
  //   Object.keys(el).map((key) => {
  //     if (el[key].id === id) {
  //       item = el[key];
  //     }
  //   });
  // });
  const [data, setData] = useState([]);

  fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  // .then((json) => console.log(json));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product-container">
      <div className="product">
        <img
          src={data.image}
          alt={data.id}
          className={"product-image active-img"}
        />
        <div className="product-details-container">
          <div className="product-details">
            <span className="product-details-span details-name">
              {data.name}
            </span>
            <span className="product-details-span details-price">
              $ {data.price}
            </span>
            <button onClick={() => addItemToCart(data)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
