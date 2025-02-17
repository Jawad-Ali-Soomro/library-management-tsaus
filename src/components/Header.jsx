import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-container flex bw">
      <a href="/" className="logo flex">
        <img src="./logo.png" alt="" />
      </a>
      <div className="navs flex">
        <div className="search-bar flex">
          <input type="text" />
          <div className="icon flex">
            <FiSearch />
          </div>
        </div>
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Header;
