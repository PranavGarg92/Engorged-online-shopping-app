import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Sale from "../components/Sale";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div className="SingleProduct-container">
      <Navbar />
      <Sale />
      <div className="wrapper">
        <div className="wrapper-image">
          <img
            src="https://st.depositphotos.com/2031845/4094/i/950/depositphotos_40947049-stock-photo-posing-of-professional-model-photos.jpg"
            alt=""
          />
        </div>
        <div className="wrapper-info">
          <div className="wrapper-info-title">Western Dress</div>
          <div className="wrapper-info-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis a
            aut aspernatur corrupti iste voluptate rerum sint laborum, nam
            repellat.
          </div>
          <div>Price: 1400RS</div>
          <button>Add to cart</button>
          <div>
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
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
