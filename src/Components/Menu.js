import React, { useEffect } from 'react'
import Logo from "../img/Logo.png"
import './Menu.css'
import {
  FaDelicious,
  FaFilter,
  FaHouseUser,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
 } from "react-icons/fa";
 
 function Menu() {

    useEffect(() => {
        
      const mainMenuLi = document
        .getElementById('mainMenu')
        .querySelectorAll("li");

      function changeActive() {
        mainMenuLi.forEach( n => n.classList.remove("active"));
        this.classList.add("active");
      }

      mainMenuLi.forEach( n => n.addEventListener('click', changeActive))

    }, []);

  return (
    <menu>
      <img src={Logo} alt="" /> 

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaFilter />} />
        <Icon icon={<FaHouseUser />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className="bottomMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu> 
  );
}


const Icon = ({icon}) => (
  <li> 
    <a href="#">{icon}</a>
    </li>
);

export default Menu