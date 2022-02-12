import React from "react";
import "./Cart_item.css";

const CartItem = ({ id, img, price, cartItems, setCartItems, item }) => {
  const handleRemove = () => {};

  return (
    <div className="Cart-item">
      <div className="Cart-item-img">
        <img src={img} alt="err" />
      </div>
      <div className="Cart-item-price">Price: {price}</div>
      <div className="Cart-item-btn">
        <button
          onClick={() =>
            setCartItems(cartItems.filter((item) => item.id !== id))
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
