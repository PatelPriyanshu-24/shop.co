import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/home.css";
import Layout from "./layout.jsx";
import Home from "./pages/home.jsx";
import Productdetails from "./pages/ProductDetailPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Cart from "./pages/Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "ProductPage",
        element: <Productdetails />,
      },
      {
        path: "CategoryPage",
        element: <CategoryPage />,
      },
      {
        path: "CartPage",
        element: <Cart />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
