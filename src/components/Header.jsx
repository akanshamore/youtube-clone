import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="header__logo"
          src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
          alt="logo"
        />
        <h1 className="header__title">
          YouTube<sup>IN</sup>
        </h1>
      </div>

      <div className="search-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input type="text" className="search-box" placeholder="Search" />
      </div>

      <button className="header__button">Sign In</button>
    </div>
  );
}

export default Header;
