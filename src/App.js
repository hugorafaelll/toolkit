import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";

import "./App.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
