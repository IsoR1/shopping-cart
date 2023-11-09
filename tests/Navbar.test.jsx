import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";

describe("Navbar", () => {
  it("renders the navbar", () => {
    const navBar = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(navBar).toMatchSnapshot();
  });

  it("redirects to shop", async () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const shopLink = screen.getByRole("link", { name: "Shop" });
    await userEvent.click(shopLink);
    expect(window.location.pathname).toBe("/shop");
  });
  it("redirects to cart", async () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const cartLink = screen.getByRole("link", { name: "Cart" });
    await userEvent.click(cartLink);
    expect(window.location.pathname).toBe("/cart");
  });
});
