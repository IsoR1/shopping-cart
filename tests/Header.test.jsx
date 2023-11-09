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
    expect(screen.getByRole("heading").textContent).toMatch(/Mock Store/i);
  });
});
