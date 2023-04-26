import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
