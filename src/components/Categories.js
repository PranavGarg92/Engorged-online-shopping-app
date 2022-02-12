import React from "react";
import "./Categories.css";
import { categories } from "../data";

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="Cate">Categories</div>
      <div className="Categories-container">
        {categories.map((item) => {
          return (
            <div key={item.id} className="category-item">
              <img src={item.img} alt={item.title} />
              <div className="categories-info">
                <div>{item.title}</div>
                <Link to="/productlist">
                  <button className="Categories-btn">Shop Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
