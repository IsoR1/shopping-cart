import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Main from "../src/components/Main.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("Initial Page", () => {
  it("renders the image", () => {
    render(
      <Router>
        <Main />
      </Router>
    );
    const image = screen.getByRole("image");
    expect(image).toBeInTheDocument();
  });
});
