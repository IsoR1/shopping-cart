import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import categories from "../data/categories";
import { BrowserRouter as Router } from "react-router-dom";

describe("sidebar", () => {
  it("renders the sidebar", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    const sidebarElement = screen.getByTestId("sidebar-div");
    expect(sidebarElement).toBeInTheDocument();
  });

  it("renders appropriate number of links in the sidebar", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toEqual(categories.length);
  });

  it("renders the appropriate links according to the category", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const links = screen.getAllByRole("link");
    let linksAreSame;
    let linkContent;
    let cat;
    links.map((val, ind) => {
      cat = val.getAttribute("data-testid");
      categories.map((el) => {
        if (!el[0].category === cat) {
          linksAreSame = false;
        }
      });
      linksAreSame = true;
    });
    expect(linksAreSame).toEqual(true);
  });
});
