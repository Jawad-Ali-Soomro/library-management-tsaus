import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Header = () => {
  console.log(Cookies.get("authToken"));
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header-container flex bw">
      <a href="/" className="logo flex">
        <img src="./logo.png" alt="" />
      </a>
      <div className="navs flex">
        <div className="search-bar flex">
          <div className="icon flex">
            <FiSearch />
          </div>
          <input type="text" />
        </div>
        <button onClick={() => router.push("/dashboard")}>
          <LuUser />
        </button>
        <div
          className="menu-bars flex col"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          {showMenu && <div className="main-menu flex col"></div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
