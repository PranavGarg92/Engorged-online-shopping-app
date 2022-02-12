import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <div className="navbar-search-container">
              <input type="text" placeholder="Search..." />
              <div>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <div className="navbar-logo">
              <Link to="/">Engorged</Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-login">
              <Link to="/login">Log in.</Link>
            </div>
            <div className="navbar-signin">
              <Link to="/register">Sign in.</Link>
            </div>
            <div className="navbar-cart">
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>

              {/* {cartItems.length} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
