import "./App.scss";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import Agriculture from "./pages/Agriculture";
import Construction from "./pages/Construction";
import Map from "./pages/Map";

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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "agriculture",
        element: <Agriculture />,
      },
      {
        path: "construction",
        element: <Construction />,
      },
      {
        path: "derivate",
        element: <h1 className="page">Derivate</h1>,
      },
      {
        path: "locations",
        element: <Map />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
