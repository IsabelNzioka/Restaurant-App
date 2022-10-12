import React from "react";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className="NavigationItem">
        {/* className={({ isActive }) => (isActive ? active : undefined)} */}
        <a href={props.link} className={props.active ? "active" : null}>
          {props.children}
        </a>
      </li>
    </div>
  );
};

export default NavigationItem;
