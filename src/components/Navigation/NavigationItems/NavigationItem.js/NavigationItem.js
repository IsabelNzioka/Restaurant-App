import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className="NavigationItem">
        {/* className={({ isActive }) => (isActive ? active : undefined)} */}
        <NavLink
          to={props.link}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {props.children}
        </NavLink>
        {/* <a href={props.link} className={props.active ? "active" : null}>
          {props.children}
        </a> */}
      </li>
    </div>
  );
};

export default NavigationItem;
