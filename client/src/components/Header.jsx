import React, { useEffect, useState } from "react";
import { showGaB, showGaW } from "../assets";
import { Link } from "react-router-dom";
// icon
import { RiGlobalFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { SiBurgerking } from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
// component
import RgbBar from "./effect/RgbBar";
import ThemeBtn from "./button/ThemeBtn";
// zustand
import useThemeStore from "../zustand/useTheme";
// CSS module
import "./components.css";
// image
import { gao } from "../assets";

const Header = ({ changeLanguage }) => {
  const { theme, toggleTheme } = useThemeStore();

  const [lanBtnActive, setLanBtnActive] = useState(false);
  const [burgerBtnActive, setBurgerBtnActive] = useState(false);
  const [profileBtnActive, setProfileBtnActive] = useState(false);
  // deal with header scroll effect
  let scrollY = 0;
  const [topPosition, setPosition] = useState("");

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

  const handleHeaderEffect = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollY) {
      setPosition("top-[-64px]");
    } else if (currentScrollPos < scrollY) {
      setPosition("top-[0px]");
    }

    scrollY = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLanBtnActive(false);
      setBurgerBtnActive(false);
      setProfileBtnActive(false);
    });

    window.addEventListener("scroll", handleHeaderEffect);

    return () => {
      window.removeEventListener("resize", () => {
        setLanBtnActive(false);
        setBurgerBtnActive(false);
        setProfileBtnActive(false);
      });

      window.removeEventListener("scroll", handleHeaderEffect);
    };
  }, []);

  return (
    <header className={`${topPosition}`}>
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

          {/* ---- Write button ---- */}
          {/* --- Login funtionality --- */}
          <div className="c-nav_icons_container">
            <Link to={"/editor"}>
              <FaPenFancy className="c-nav_icons hover:text-blue-600" />
            </Link>
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

          <div
            className="c-nav_icons_container relative"
            onClick={() => {
              setProfileBtnActive(!profileBtnActive);
            }}
          >
            <img src={gao} className="h-[60%] rounded-full cursor-pointer" />

            <div
              className={`c-nav-profile-dropdown ${
                profileBtnActive ? "c-nav-profile-dropdown_on" : ""
              }`}
            >
              <div className="c-dropdown-list_container">
                <p>@ShowGa</p>
                <p className="text-sm">showga@gmail.com</p>
              </div>

              <div className="c-dropdown-list_container">
                <p className="dropdown_items">Dashboard</p>
                <p className="dropdown_items">Profile</p>
              </div>

              <p className="dropdown_items">Sign Out</p>
            </div>
          </div>
        </nav>
      </div>

      <RgbBar />
    </header>
  );
};

export default Header;
