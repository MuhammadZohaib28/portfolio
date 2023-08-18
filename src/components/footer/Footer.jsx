import React from "react";
import "./footer.scss";
import logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <img src={logo} alt="" />
        <span>© Muhammad Zohaib. 2023</span>
      </div>
      <div className="right">
        <span>Thank you so much for your most precious time, I am glad that you scrolled till end! 🧡</span>
      </div>
    </footer>
  );
};

export default Footer;
