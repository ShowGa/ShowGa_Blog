import React, { useState } from "react";
import { showGaB } from "../assets";
import { Link } from "react-router-dom";
// icon
import { RiGlobalFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { SiBurgerking } from "react-icons/si";
import RgbBar from "./effect/RgbBar";

const Header = ({ changeLanguage }) => {
  const [lanBtnActive, setLanBtnActive] = useState(false);
  const [burgerBtnActive, setBurgerBtnActive] = useState(false);

  return (
    <header>
      <div className="relative flex justify-between items-center px-6 h-16 shadoweffect">
        <div className="flex items-center">
          <img src={showGaB} alt="ShowGa Logo" className="h-12" />
          <p className="comfortaa text-xl font-bold">
            <span className="red_blue_LG">ShowGa's </span>Blog
          </p>
        </div>

        <nav className="flex items-center gap-3 h-full">
          <ul className="navList flex gap-3 items-center">
            <Link to={"/"} className="navBtnHoverEffect cursor-pointer">
              Home
            </Link>
            <Link to={"/about"} className="navBtnHoverEffect cursor-pointer">
              About
            </Link>
            <Link to={"/login"} className="navBtnHoverEffect cursor-pointer">
              Login
            </Link>
          </ul>

          <div
            onMouseEnter={() => setBurgerBtnActive(!burgerBtnActive)}
            onMouseLeave={() => setBurgerBtnActive(!burgerBtnActive)}
            className="relative h-full flex items-center"
          >
            <SiBurgerking
              className={`burger text-3xl cursor-pointer transition-all duration-200 ${
                burgerBtnActive ? "text-yellow-600" : ""
              }`}
            />

            <div
              className={`dropdown ${
                burgerBtnActive ? "dropdown_on dropdown_effect" : ""
              } absolute z-40`}
            >
              <ul className="font-bold">
                <Link to={"/"}>
                  <li className="cursor-pointer pl-2 py-1 rounded-md hover:bg-gray-500">
                    Home
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li className="cursor-pointer pl-2 py-1 rounded-md hover:bg-gray-500">
                    About
                  </li>
                </Link>
                <Link to={"/login"}>
                  <li className="cursor-pointer pl-2 py-1 rounded-md hover:bg-gray-500">
                    Login
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <Link to={"/search"} className="h-full flex items-center">
            <FiSearch className="text-3xl cursor-pointer transition-all duration-200 hover:text-green-600" />
          </Link>

          <div
            onMouseEnter={() => setLanBtnActive(!lanBtnActive)}
            onMouseLeave={() => setLanBtnActive(!lanBtnActive)}
            className="relative h-full flex items-center"
          >
            <RiGlobalFill
              className={`text-3xl cursor-pointer transition-all duration-200 ${
                lanBtnActive ? "text-red-600" : ""
              }`}
            />

            <div
              className={`dropdown ${
                lanBtnActive ? "dropdown_on dropdown_effect" : ""
              } absolute z-40`}
            >
              <ul className="font-bold">
                <li
                  className="cursor-pointer pl-2 py-1 rounded-md hover:bg-gray-500"
                  onClick={() => changeLanguage("zh")}
                >
                  中文
                </li>
                <li
                  className="cursor-pointer pl-2 py-1 rounded-md hover:bg-gray-500"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <RgbBar />
    </header>
  );
};

export default Header;
