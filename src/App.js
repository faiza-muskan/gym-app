import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";

const route = createBrowserRouter([
  { path: "/", element: <Root />, children: [{ path: "", element: <Home /> }] },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
