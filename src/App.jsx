import React from "react";

import "./App.css"; // Import the CSS file for custom styles

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componenets/Home";
import PricingPage from "./Componenets/Pricingpage";
import ContactUs from "./Componenets/Contactus";
import Blog from "./Componenets/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
