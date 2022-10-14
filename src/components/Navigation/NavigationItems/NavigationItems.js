import React from "react";

import NavigationItem from "./NavigationItem.js/NavigationItem";

import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <div>
      <ul className="NavigationItems">
        <NavigationItem link="/" active>
          Menu
        </NavigationItem>
        <NavigationItem link="/">Specials</NavigationItem>
        <NavigationItem link="/">Gallery</NavigationItem>
        <NavigationItem link="/">Book</NavigationItem>
        <NavigationItem link="/">Order</NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
