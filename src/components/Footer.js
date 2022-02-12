import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div id="socialmediafa" className="social-media">
          <FacebookIcon />
        </div>
        <div id="socialmediaig" className="social-media">
          <InstagramIcon />
        </div>
        <div id="socialmediayt" className="social-media">
          <YouTubeIcon />
        </div>
        <div id="socialmediaem" className="social-media">
          <EmailIcon />
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        reiciendis voluptatum nobis ea quam vero distinctio, sunt quaerat,
        vitae, nemo aspernatur quae odit alias eum magnam adipisci saepe. Minima
        ipsa quis omnis adipisci unde consequatur eveniet minus sequi sapiente
        cupiditate.
      </div>
      <div className="end">Pranav Garg</div>
    </>
  );
};

export default Footer;
