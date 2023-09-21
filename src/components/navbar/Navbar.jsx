import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../Images/logo.png";
import bars from "../../Images/bars.png";
import close from "../../Images/close.png";
import ThemeMode from "../thememode/ThemeMode";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
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

      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={20}
        onClick={closeMenu}
      >
        <div className="afp">
          <span className="dot" />
          <span>Available for projects</span>
        </div>
      </ScrollLink>

      <div className="responsivemenu" onClick={handleClick}>
        {!click ? (
          <img src={bars} alt="" className="menu" />
        ) : (
          <img src={close} alt="" className="menu" />
        )}
      </div>

      {click && (
        <div className="responsivemenuu">
          <div className="right">
            <ul className="navitems">
              <li className="navitem">
                <ScrollLink
                  to="navbar"
                  spy={true}
                  smooth={true}
                  offset={-11170}
                  duration={20}
                  onClick={closeMenu}
                >
                  Home
                </ScrollLink>
              </li>{" "}
              <hr />
              <li className="navitem">
                <ScrollLink
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  About
                </ScrollLink>
              </li>{" "}
              <hr />
              <li className="navitem">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Projects
                </ScrollLink>
              </li>{" "}
              <hr />
              <li className="navitem">
                <ScrollLink
                  to="Certificates"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Certificates
                </ScrollLink>
              </li>
              <hr />
              <li className="navitem">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Contact
                </ScrollLink>
              </li>{" "}
              <hr />
              <li className="navitem" onClick={props.button}>
                <ThemeMode />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
