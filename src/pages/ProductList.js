import React from "react";
import "./ProductList.css";
import Navbar from "../components/Navbar";
import Sale from "../components/Sale";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const ProductList = ({ cartItems, setCartItems }) => {
  return (
    <div className="ProductList-container">
      <Link to="/productlist">
        <Sale />
      </Link>
      <div className="ProductsList-title">Dresses</div>
      <div className="filter-container">
        <div className="filter">
          <div className="filter-text">Filter Porducts:</div>
          <select name="color" id="color">
            <option disabled>color</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
          </select>
          <select name="size" id="size">
            <option disabled>size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">X-Large</option>
            <option value="xxlarge">XX-Large</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="filter">
          <div className="filter-text">Sort Porducts:</div>
          <select name="size" id="size">
            <option disabled>Sort</option>
            <option value="small">Newest</option>
            <option value="medium">Popular</option>
            <option value="large">Sale price</option>
          </select>
        </div>
      </div>
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
