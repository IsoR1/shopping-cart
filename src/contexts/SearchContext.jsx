import { useState, createContext } from "react";

export const SearchContext = createContext({
  searchQuery: "",
  handleSearchInput: () => {},
});
