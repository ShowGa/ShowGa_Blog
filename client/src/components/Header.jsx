import React from "react";

const Header = ({ changeLanguage }) => {
  return (
    <header>
      <div>ShowGa | Blog</div>
      <div>Search Bar</div>
      <nav>
        <ul>
          <li>
            <button onClick={() => changeLanguage("en")}>English</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("zh")}>中文</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
