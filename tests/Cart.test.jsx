import React from "react";
import { render, screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import Cart from "../src/components/Cart.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../src/contexts/CartContext.jsx";

describe("Cart", () => {
  it("Renders proper message when cart is empty", () => {
    render(
      <Router>
        <Cart />
      </Router>
    );
    expect(screen.getByTestId("cartTestIdP")).toBeInTheDocument();
  });

  it("Renders proper items which are in the cart", () => {
    const sampleProducts = [
      {
        id: 1,
        title: "Product 1",
        image: "product1.jpg",
        price: 10.99,
        category: "Category-A",
      },
      {
        id: 2,
        title: "Product 2",
        image: "product2.jpg",
        price: 15.99,
        category: "Category-B",
      },
    ];
    render(
      <Router>
        <CartContext.Provider value={{ cartItems: sampleProducts }}>
          <Cart />
        </CartContext.Provider>
      </Router>
    );
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
  });
  it("Increase the quantity of cart item when the + button is clicked", async () => {
    const sampleProducts = [
      {
        id: 1,
        title: "Product 1",
        image: "product1.jpg",
        price: 10.99,
        category: "Category-A",
        quantity: 1,
      },
    ];

    const addToCart = vi.fn();
    const user = userEvent.setup();
    render(
      <Router>
        <CartContext.Provider value={{ cartItems: sampleProducts, addToCart }}>
          <Cart />
        </CartContext.Provider>
      </Router>
    );

    const button = screen.getByRole("button", { name: "+" });
    await user.click(button);

    expect(addToCart).toHaveBeenCalledWith(sampleProducts[0]);
  });
  it("Calls the correct function when clicking the '-' button", async () => {
    const sampleProducts = [
      {
        id: 1,
        title: "Product 1",
        image: "product1.jpg",
        price: 10.99,
        category: "Category-A",
      },
    ];

    const removeFromCart = vi.fn();
    const user = userEvent.setup();
    render(
      <Router>
        <CartContext.Provider
          value={{ cartItems: sampleProducts, removeFromCart }}
        >
          <Cart />
        </CartContext.Provider>
      </Router>
    );

    const button = screen.getByRole("button", { name: "-" });
    await user.click(button);

    expect(removeFromCart).toHaveBeenCalledWith(sampleProducts[0]);
  });
});
