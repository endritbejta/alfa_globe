import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Products from "./components/Products";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import MobileNavBar from "./components/MobileNavBar";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
]);

function App() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="App">
      <Header showOptions={showOptions} setShowOptions={setShowOptions} />
      <Home />
      <Footer />
      <MobileNavBar showOptions={showOptions} setShowOptions={setShowOptions} />
    </div>
  );
}

export default App;
