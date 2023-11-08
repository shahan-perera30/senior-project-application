import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import "./Menu.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
          <CustomLink to="./dashboard/">
            <FaDelicious />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="./filter/">
            <FaFilter />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/userProfile/">
            <FaHouseUser />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/clockIn/">
            <FaRegClock />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/logout/">
            <FaSignOutAlt />
          </CustomLink>
        </li>
      </ul>
    </menu>
  );

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
