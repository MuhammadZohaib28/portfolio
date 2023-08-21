import React from "react";
import "./footer.scss";
import logo from "../../Images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="left">
        <img src={logo} alt="" /> 
        <span>
        {year} ©{" "}
          
            For keep supporting me{" "}
            <a
              href="https://www.buymeacoffee.com/muhammadzohaib"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a ☕
            </a>
          
          . 
        </span>
      </div>
      <div className="right">
        <span>
          Thank you so much for your most precious time, I am glad that you
          scrolled till end!  ❤️ 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
