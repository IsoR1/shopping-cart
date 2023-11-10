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
import ShopItem from "./components/ShopItem";
import Cart from "./components/Cart";
import { CartContext } from "./contexts/CartContext";

function HeaderLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
function SidebarLayout() {
  return (
    <div className="shop-container" data-testid="shop-con">
      <Sidebar />
      <Outlet />
    </div>
  );
}

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/shop/:category/:id",
          element: <ShopItem />,
        },
        {
          element: <SidebarLayout />,
          children: [
            {
              path: "/shop",
              element: <Shop />,
              children: [
                {
                  path: ":category",
                  element: <Shop />,
                },
              ],
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      {/* <CartContext.Provider>{router}</CartContext.Provider> */}
    </RouterProvider>
  );
};

export default Router;
