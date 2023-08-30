import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Products from "./components/Products";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import MobileNavBar from "./components/MobileNavBar";
import { useEffect, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUsIntro from "./components/AboutIntro";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/about-us",
        element: <AboutUsIntro />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
