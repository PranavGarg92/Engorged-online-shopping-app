import React from "react";
import "./NewsLetter.css";
import CheckroomIcon from "@mui/icons-material/Checkroom";

const NewsLetter = () => {
  return (
    <div className="NewsLetter-Container">
      <div className="Newsletter-title">
        <h1>NewsLetter</h1>
      </div>
      <div className="newsletter-input">
        <input type="text" placeholder="email" />
        <button>Subscribe</button>
      </div>

      <div className="newsletter-info">
        Submit Your E-mail For Latest Updates About FASHION <CheckroomIcon />
      </div>
    </div>
  );
};

export default NewsLetter;
