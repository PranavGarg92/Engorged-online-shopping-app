import React from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import Sale from "../components/Sale";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  let a = 0;

  for (let i = 0; i < cartItems.length; i++) {
    a += cartItems[i].price;
  }

  return (
    <>
      <Link to="/productlist">
        <Sale />
      </Link>
      <div className="Cart-container">Shopping Cart</div>
      <div className="cart-items">
        {cartItems.map((item) => {
          const { img, price, id } = item;
          return (
            <div className="cart-items" key={id}>
              <CartItem
                id={id}
                item={item}
                img={img}
                price={price}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          );
        })}
        <div>Total: {a}</div>
        <div>
          <div>Including GST</div>
          <button className="cart-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
