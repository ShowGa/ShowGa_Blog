import React, { useState } from "react";
import { showGaB } from "../assets";
import { Link } from "react-router-dom";
// icon
import { RiGlobalFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Header = ({ changeLanguage }) => {
  const [lanBtnActive, setLanBtnActive] = useState(false);
  console.log(lanBtnActive);

  return (
    <header className="flex justify-between items-center px-6 h-16 ">
      <div className="flex items-center">
        <img src={showGaB} alt="ShowGa Logo" className="h-10" />
        <p className="comfortaa text-xl font-bold">
          <span className="red_blue_LG">ShowGa's </span>Blog
        </p>
      </div>

      <nav className="flex gap-3">
        <ul className="flex gap-3 items-center">
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

        <Link to={"/search"}>
          <FiSearch className="text-2xl cursor-pointer transition-all duration-200 hover:text-blue-500" />
        </Link>

        <div className="relative">
          <RiGlobalFill
            onClick={() => {
              setLanBtnActive(!lanBtnActive);
            }}
            className={`text-2xl cursor-pointer transition-all duration-200 ${
              lanBtnActive ? "text-blue-500" : ""
            }`}
          />

          <div
            className={`lan_dropdown ${
              lanBtnActive ? "lan_dropdown_on" : ""
            } absolute `}
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
    </header>
  );
};

export default Header;
