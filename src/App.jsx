import "./App.css"; // Import the CSS file for custom styles

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./Componenets/Home";
import PricingPage from "./Componenets/Pricingpage";
import ContactUs from "./Componenets/Contactus";
import Blog from "./Componenets/Blog";
import { Analytics } from "@vercel/analytics/react";
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
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}
