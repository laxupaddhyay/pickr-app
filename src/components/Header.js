import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/header.css";

import logo from "../assets/logo-1.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide");
        } else {
          setShow("show");
        }
      } else {
        setShow("top");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const navigationHandler = (type) => {
    if (type === "color") {
      navigate("/");
    } else if (type === "gradient") {
      navigate("/gradient");
    } else if (type === "color-shades") {
      navigate("/color-shades");
    } else if (type === "color-palette") {
      navigate("/color-palette");
    }
    setMobileMenu(false);
  };

  return (
    <>
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("color")}>
            Color
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("gradient")}
          >
            Gradient
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("color-shades")}
          >
            List of Colors
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("color-palette")}
          >
            Color Palette
          </li>
        </ul>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </header>

      <div className="flex justify-center bg-red-500 text-white text-center">
        <a href="https://www.github.com/SouravKAgarwal/pickr-app">
          <span>Give this repo a &#11088; if you liked it.</span>
        </a>
      </div>
    </>
  );
};

export default Header;
