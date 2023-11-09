import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Search from "../src/components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Params } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SearchContext } from "../src/contexts/SearchContext";

describe("Search", () => {
  it("search component toggles visibility on icon click", async () => {
    render(<Search />);

    const user = userEvent.setup();
    const searchInput = screen.getByPlaceholderText("Search");
    const searchIcon = screen.getByTestId("search-icon");

    // Search Input is not active to start
    expect(searchInput).not.toHaveClass("active");

    await user.click(searchIcon);
    // Search Input is shown on click
    expect(searchInput).toHaveClass("active");

    await user.click(searchIcon);
    // Search Icon is once again hidden
    expect(searchInput).not.toHaveClass("active");
  });
});
