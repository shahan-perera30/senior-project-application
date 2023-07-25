import React from 'react'
import Logo from "../img/Logo.png"
import './Menu.css'
import {
  AiTwotoneFilter,
  ImProfile,
  FaCog,
  FaSignOutAlt,
} from "react-icons/ai,im,fa";
function Menu() {
  return (
    <menu>
      <img src={Logo} alt="" /> 

      <ul id="mainMenu">
        <Icon icon={<AiTwotoneFilter />} />
        <Icon icon={<ImProfile />} />
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