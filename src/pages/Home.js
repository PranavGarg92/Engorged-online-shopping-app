import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Poster from "../components/Poster";
import Products from "../components/Products";
import Sale from "../components/Sale";
import "./Home.css";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const Home = ({ cartItems, setCartItems }) => {
  return (
    <div className="Home">
      <Link to="/productlist">
        <Sale />
      </Link>
      <Poster />
      <Categories />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <NewsLetter />
      <Footer />
    </div>
    // <ProductList cartItems={cartItems} setCartItems={setCartItems} />
  );
};

export default Home;
