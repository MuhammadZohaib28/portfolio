import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../Images/logo.png";
import bars from "../../Images/bars.png";
import close from "../../Images/close.png";
import ThemeMode from "../thememode/ThemeMode";
import { Link } from "react-scroll";

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
                <Link
                  to="navbar"
                  spy={true}
                  smooth={true}
                  offset={-11170}
                  duration={20}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>{" "}
              <hr />
              <li className="navitem">
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>{" "}
              <hr />
              <li className="navitem">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>{" "}
              <hr />
              <li className="navitem">
                <Link
                  to="Certificates"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Certificates
                </Link>
              </li>
              <hr />
              <li className="navitem">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={20}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
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
