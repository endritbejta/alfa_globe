import "./App.scss";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
