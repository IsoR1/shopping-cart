import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";
import { createMemoryHistory } from "history";

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
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    // const user = userEvent.setup();
    // const shopLink = screen.getByText("Shop");
    const shopLink = screen.getByRole("link", { name: "Shop" });
    // const shopLink = screen.getByTestId("shop-link");
    userEvent.click(shopLink);
    // await user.click(shopLink);
    expect(await screen.getByTestId("shop-con")).toBeInTheDocument();
  });
});
