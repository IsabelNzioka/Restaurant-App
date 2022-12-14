import React from "react";

import NavigationItem from "./NavigationItem.js/NavigationItem";

import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <div>
      <ul className="NavigationItems">
        {/* <NavigationItem link="/">Home</NavigationItem> */}
        <NavigationItem link="/menu">Specials</NavigationItem>
        <NavigationItem link="/gallery">Gallery</NavigationItem>
        <NavigationItem link="/menu">Menu</NavigationItem>
        <NavigationItem link="/menu">Order</NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
