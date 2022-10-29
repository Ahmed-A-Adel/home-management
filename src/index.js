import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePageNav from "./components/HomePageNav";
import LoginPopup from "./components/LoginPopup";
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <h1>oppos! it's okay just go back</h1>,
    children: [{ element: <LoginPopup />, path: "/" }],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
