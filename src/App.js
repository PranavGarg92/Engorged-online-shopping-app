import "./App.css";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      document.title = `Cart (${cartItems.length})`;
    } else {
      document.title = "Engorged E-com-web-App";
    }
  });

  return (
    <div div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/productlist"
            element={
              <ProductList cartItems={cartItems} setCartItems={setCartItems} />
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
