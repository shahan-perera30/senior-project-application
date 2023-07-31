import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Cover from "../img/Cover.png";

function TopContainer() {
  useEffect(() => {
    const menuTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");

    menuTarget.addEventListener("mouseenter", () => {
      menuTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      menuTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

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

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Profile Settings</li>
            <li>Data Settings</li>
            <li>Data History</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
