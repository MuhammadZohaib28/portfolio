import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../Images/logo.png";
import bars from "../../Images/bars.png";
import close from "../../Images/close.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);
  const [responsivenavbar, setResponsivenavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <nav className={active ? "navbar active" : "navbar"}>
      <div className="left">
        <img src={logo} alt="" />
      </div>

      <div className="responsivemenu" onClick={handleClick}>
        {click ? (
          <img src={bars} alt="" className="menu" />
        ) : (
          <img src={close} alt="" className="menu" />
        )}
      </div>

      {!click && (
        <div className="responsivemenuu">
          <div className="right">
            <ul className="navitems">
              <li className="navitem">Home</li> <hr />
              <li className="navitem">About</li> <hr />
              <li className="navitem">Projects</li> <hr />
              <li className="navitem">Contact</li> <hr />
              <li className="navitem">DarkMode</li>
            </ul>
          </div>
        </div>
      )}

      {responsivenavbar && (
        <div className="right">
          <ul className="navitems">
            <li className="navitem">Home</li>
            <li className="navitem">About</li>
            <li className="navitem">Projects</li>
            <li className="navitem">Contact</li>
            <li className="navitem">DarkMode</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
