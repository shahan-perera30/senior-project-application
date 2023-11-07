import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import "./Menu.css";
/* import { useAuth0 } from "@auth0/auth0-react"; */
import {
  FaDelicious,
  FaFilter,
  FaHouseUser,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

/* const { loginWithRedirect, logout, user, isLoading } = useAuth0(); */
function Menu() {
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
        <a href="./dashboard/">
          <Icon icon={<FaDelicious />} />
        </a>
        <a href="./filter/"></a>
        <Icon icon={<FaFilter />} />
        <a href="./profile/"></a>
        <Icon icon={<FaHouseUser />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
