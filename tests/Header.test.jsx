import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("Header", () => {
  it("renders correct heading", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/Mock Heat Store/i);
  });
  // it("renders the navigation links", () => {
  //   render(
  //     <Router>
  //       <Header />
  //     </Router>
  //   );

  //   const ulElement = screen.getByRole("list");
  //   const listItems = screen.getAllByRole("listitem");

  //   expect(ulElement).toBeInTheDocument();
  //   expect(listItems).toHaveLength(3);

  //   expect(listItems[0]).toHaveTextContent("Shop");
  //   expect(listItems[1]).toHaveTextContent("Search");
  //   expect(listItems[2]).toHaveTextContent("Cart");
  // });
});
