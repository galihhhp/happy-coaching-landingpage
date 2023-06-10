import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Guide from "routes/Guide";
import Home from "routes/Home";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/free-guide",
    element: <Guide />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
