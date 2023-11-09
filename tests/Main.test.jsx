import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes } from "react-router-dom";
import Main from "../src/components/Main.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Initial Page", () => {
  it("renders a link with the text 'Enter'", () => {
    render(
      <Router>
        <Main />
      </Router>
    );
    const link = screen.getByRole("link", { name: "Enter" });
    expect(link).toBeInTheDocument();
  });
  it("directs you to the shop route when clicking the 'enter'' link", async () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    const onClick = vi.fn();
    const link = screen.getByRole("link", { name: "Enter" });

    await userEvent.click(link);
    expect(window.location.pathname).toBe("/shop");
  });
});
