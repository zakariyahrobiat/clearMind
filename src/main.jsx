import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Context } from "./context/context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
