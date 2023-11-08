import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import "./Menu.css";
import { Link } from "react-router-dom";
import {
  FaDelicious,
  FaFilter,
  FaHouseUser,
  FaRegClock,
  FaSignOutAlt,
} from "react-icons/fa";
export default function Menu() {
  /* import { useAuth0 } from "@auth0/auth0-react"; */

  /* const { loginWithRedirect, logout, user, isLoading } = useAuth0(); */
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={Logo} alt="" />

      <ul id="mainMenu">
        <li>
          <Link to="./dashboard">
            <FaDelicious />
          </Link>
        </li>
        <li>
          <Link to="./filter">
            <FaFilter />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaHouseUser />
          </Link>
        </li>
        <li>
          <Link to="/clockIn">
            <FaRegClock />
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt />
          </Link>
        </li>
      </ul>
    </menu>
  );
}
