import React, { useEffect, useState } from "react";
import { showGaB, showGaW } from "../assets";
import { Link } from "react-router-dom";
// icon
import { RiGlobalFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { SiBurgerking } from "react-icons/si";
// component
import RgbBar from "./effect/RgbBar";
import ThemeBtn from "./button/ThemeBtn";
// zustand
import useThemeStore from "../zustand/useTheme";
// CSS module
import "./components.css";

const Header = ({ changeLanguage }) => {
  const { theme, toggleTheme } = useThemeStore();

  const [lanBtnActive, setLanBtnActive] = useState(false);
  const [burgerBtnActive, setBurgerBtnActive] = useState(false);

  const handleAbleToggle = (cb, btnActiveState) => {
    if (window.innerWidth < 768) {
      cb(!btnActiveState);
    }
  };
  const handleAbleHover = (cb, btnActiveState) => {
    if (window.innerWidth > 767) {
      cb(!btnActiveState);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLanBtnActive(false);
      setBurgerBtnActive(false);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setLanBtnActive(false);
        setBurgerBtnActive(false);
      });
    };
  }, []);

  return (
    <header>
      <div className="c-header_container  c-header_container_effect">
        {/* ======== Logo section ======== */}

        <div className="c-header_logo_container">
          <img
            src={theme === "light" ? showGaB : showGaW}
            alt="ShowGa Logo"
            className="h-12"
          />
          <p className="text-xl font-bold">
            <span className="red_blue_LG">ShowGa's </span>Blog
          </p>
        </div>

        {/* ======== Nav section ======== */}

        <nav className="c-nav_container">
          {/* ---- Page List ---- */}

          <ul className="c-nav_list">
            <Link to={"/"} className="btn_hover_effect cursor-pointer">
              Home
            </Link>
            <Link to={"/about"} className="btn_hover_effect cursor-pointer">
              About
            </Link>
            <Link to={"/login"} className="btn_hover_effect cursor-pointer">
              Login
            </Link>
          </ul>

          {/* ---- Page List and Burger button ---- */}

          <div className="c-nav_icons_container relative">
            <SiBurgerking
              onClick={() => {
                setBurgerBtnActive(!burgerBtnActive);
              }}
              className={`c-nav_icons c-nav_icon_burger ${
                burgerBtnActive ? "text-yellow-600" : ""
              }`}
            />

            <div
              className={`dropdown ${
                burgerBtnActive ? "dropdown_on" : ""
              } absolute z-40`}
            >
              <ul
                onClick={() => {
                  setBurgerBtnActive(false);
                }}
                className="font-bold"
              >
                <Link to={"/"}>
                  <li className="dropdown_items">Home</li>
                </Link>
                <Link to={"/About"}>
                  <li className="dropdown_items">About</li>
                </Link>
                <Link to={"/login"}>
                  <li className="dropdown_items">Login</li>
                </Link>
              </ul>
            </div>
          </div>

          {/* ---- Search button ---- */}

          <div className="c-nav_icons_container">
            <Link to={"/search"}>
              <FiSearch className="c-nav_icons hover:text-green-600" />
            </Link>
          </div>

          {/* ---- Language List and Button ---- */}

          <div
            onMouseEnter={() => {
              handleAbleHover(setLanBtnActive, lanBtnActive);
            }}
            onMouseLeave={() => {
              handleAbleHover(setLanBtnActive, lanBtnActive);
            }}
            className="c-nav_icons_container relative"
          >
            <RiGlobalFill
              onClick={() => {
                handleAbleToggle(setLanBtnActive, lanBtnActive);
              }}
              className={`c-nav_icons ${lanBtnActive ? "text-red-600" : ""}`}
            />

            <div
              className={`dropdown ${
                lanBtnActive ? "dropdown_on" : ""
              } absolute z-40`}
            >
              <ul className="font-bold">
                <li
                  className="dropdown_items"
                  onClick={() => changeLanguage("zh")}
                >
                  中文
                </li>
                <li
                  className="dropdown_items"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </li>
              </ul>
            </div>
          </div>

          {/* ---- Theme Button ---- */}

          <ThemeBtn />
        </nav>
      </div>

      <RgbBar />
    </header>
  );
};

export default Header;
