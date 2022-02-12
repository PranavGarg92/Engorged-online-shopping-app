import React from "react";
import "./Poster.css";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <Link to="/productlist">
      <div className="pos">
        <div className="Poster">
          <img
            id="posone"
            src="https://wallpaperaccess.com/full/816019.png"
            alt="er"
          />
          <img
            id="postwo"
            src="https://cdn1.vectorstock.com/i/1000x1000/65/15/fashion-sale-poster-vector-9996515.jpg"
            alt="err"
          />
        </div>
      </div>
    </Link>
  );
};

export default Poster;
