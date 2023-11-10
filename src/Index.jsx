import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./components/Main";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
