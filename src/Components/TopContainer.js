import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Cover from "../img/Cover.png";

function TopContainer() {
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search here, Looking for" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>

        <div className="profileImage">
          <img src={Cover} alt="" />
        </div>

        <p className="profileName">Shahan Perera</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
      </div>
    </div>
  );
}

export default TopContainer;
