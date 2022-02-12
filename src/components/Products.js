import React from "react";
import "./Products.css";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = ({ cartItems, setCartItems }) => {
  return (
    <div className="pro">
      <div className="products-heading">Popular Products</div>
      <p>Click on cart option to add to cart</p>
      <div className="products-container">
        {popularProducts.map((item) => {
          const { price } = item;
          return (
            <Product
              item={item}
              price={price}
              key={item.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
