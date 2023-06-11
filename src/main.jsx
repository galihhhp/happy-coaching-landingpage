import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutUs from "routes/AboutUs";
import ExtraSales from "routes/ExtraSales";
import Guide from "routes/Guide";
import Home from "routes/Home";
import NotFound from "routes/NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import Service from "routes/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/free-guide",
    element: <Guide />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/extra-salespage",
    element: <ExtraSales />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
