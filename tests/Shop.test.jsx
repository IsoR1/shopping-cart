import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Shop from "../components/Shop";
import Sidebar from "../components/Sidebar";
import categories from "../data/categories";
import getTotalItemCount from "../utils/totalItems";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Shop", () => {
  it("renders without error", () => {
    render(
      <Router>
        <Shop />
      </Router>
    );

    const shopDiv = screen.getByTestId("shop-div");
    expect(shopDiv).toBeInTheDocument();
  });

  it("renders all shop items when no category is selected", () => {
    render(
      <Router>
        <Sidebar />
        <Shop />
      </Router>
    );

    const totalCount = getTotalItemCount();
    const shopCards = screen.queryAllByTestId("shop-card");
    expect(shopCards.length).toEqual(totalCount);
  });

  it("renders shop items only corresponding to category clicked", async () => {
    render(
      <Router>
        <Sidebar />
        <Shop />
      </Router>
    );

    const onChangeMock = jest.fn();
    const user = userEvent.setup();

    categories.forEach((el) => {
      const category = screen.getByTestId(el[0].category);
      const shopCards = screen.queryAllByTestId("shop-card");
      // await user.click
      fireEvent.click(category);

      expect(shopCards.length).toEqual(getTotalItemCount(category));
    });
  });
});
