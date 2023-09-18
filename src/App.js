import "./App.scss";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
