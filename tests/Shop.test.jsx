import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import Shop from "../src/components/Shop";
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Params } from "react-router-dom";
import { SearchContext } from "../src/contexts/SearchContext";
import { ProductsContext } from "../src/contexts/ProductsContext";
import { act } from "react-dom/test-utils";
import { CartContext } from "../src/contexts/CartContext";

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("Shop", () => {
  it("makes a GET request to fetch products", async () => {
    const sampleProducts = [
      {
        id: 1,
        title: "Product 1",
        image: "product1.jpg",
        price: 10.99,
        category: "Category-A",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(sampleProducts));

    const shop = await render(<Shop />);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  it("renders the array of products", async () => {
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

    fetch.mockResolvedValue(createFetchResponse(sampleProducts));

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });
  it("renders shop items according to search query", async () => {
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
    const query = "Product 1";

    fetch.mockResolvedValue(createFetchResponse(sampleProducts));
    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ searchQuery: query }}>
          <Shop />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
    });
  });
});
