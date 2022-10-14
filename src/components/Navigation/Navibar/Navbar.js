import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggle from "../Sidedrawer/MenuToggle/MenuToggle";

import { FaYelp } from "react-icons/fa";

import "./Navbar.css";

const Navbar = (props) => (
  <header className="Navbar">
    <MenuToggle clicked={props.menuToggleClicked} />
    <div className="Logo">
      <FaYelp className="Icon" />
      La Belle
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default Navbar;
