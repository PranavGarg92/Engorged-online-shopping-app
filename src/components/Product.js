import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

const Product = ({ item, cartItems, setCartItems }) => {
  const handleClick = (item, setCartItems) => {
    alert("Product added");
    setCartItems((cartItems) => [...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <div className="Product-container">
      <div>Cloathing</div>
      <div className="product-circle">
        <img src={item.img} alt="err" />
      </div>
      <div className="product info">
        <ShoppingCartIcon
          className="product-clicks"
          onClick={() => handleClick(item, setCartItems)}
        />
        <FavoriteBorderIcon
          className="product-clicks"
          onClick={() => console.log(cartItems)}
        />
        <SearchIcon className="product-clicks" />
      </div>
    </div>
  );
};

export default Product;
