import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
// import ContactPage from "./pages/ContactPage";
// import ServicesPage from "./pages/ServicesPage";
// import MenuPage from "./pages/MenuPage";

// lazy loading
const MenuPage = lazy(() => import("./pages/MenuPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "/menu",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <MenuPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
