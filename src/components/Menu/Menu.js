import React from "react";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Menu.css";

import food from "../../assets/img/food/food1.jpg";
import food1 from "../../assets/img/food/food2.jpg";
import food2 from "../../assets/img/food/food3.jpg";
import food3 from "../../assets/img/food/food4.jpg";
import food4 from "../../assets/img/food/food5.jpg";
import drink1 from "../../assets/img/food/drink1.jpg";
import drink2 from "../../assets/img/food/drink2.jpg";
import drink3 from "../../assets/img/food/drink3.jpg";
import drink4 from "../../assets/img/food/drink4.jpg";

import Lunch from "./Menus/Lunch";
import Diner from "./Menus/Dinner";
import Breakfast from "./Menus/Breakfast";

import SliderMenu from "../Home/Slider/SliderMultipleItems/SliderMenu";

const Menu = () => {
  let navigate = useNavigate();
  const images = [
    food,
    drink1,
    food1,
    drink2,
    food2,
    drink3,
    food3,
    drink4,
    food4,
  ];
  // const images1 = [chef4];

  const drinksHandler = () => {
    navigate("/menu/breakfast");
  };

  const lunchHandler = () => {
    navigate("/menu/lunch");
  };

  const dinnerHandler = () => {
    navigate("/menu/dinner");
  };

  let routes = (
    <Routes>
      <Route index element={<Lunch />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dinner" element={<Diner />} />
      <Route path="/breakfast" element={<Breakfast />} />
    </Routes>
  );

  return (
    <div className="Menu">
      <div className="MenuMain">
        {/* <img src={food} alt="MenuImage" width="100%" height="100%" /> */}
      </div>

      <div className="MenuContent">
        <h1 className="MenuTitle">Menu</h1>
        <div className="Paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
            commodo. Aenean vehicula erat turpis. Suspendis at lacinia libero,at
            lacinia libero, in molestie mi. Maecenas ac turpis. Curabitur a
            tincidunt tortor. Cras at dui pellentesque, varius sapien id, porta
            mauris. Sed tempus dui ut justo aliquam, vel
          </p>
        </div>
      </div>

      {/* <svg width="22" height="20" viewBox="0 0 22 20">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#icon-account-fb"
          x="0"
          y="0"
        ></use>
      </svg> */}
      <div className="MenuMenu">
        <div className="MenuItems">
          <div className="Menus">
            <Link to="/menu/lunch">Lunch</Link>
            <Link to="/menu/dinner">Diner</Link>
            <Link to="/menu/breakfast">Breakfast</Link>
            <Link to="/menu/dinner">Sides</Link>
            <Link to="/menu/breakfast">Drinks</Link>

            {/* <HashLink to="/menu/#lunch">Lunch</HashLink> */}
            {/* <button className="ButtonMenu">Breakfast</button>
            <button className="ButtonMenu">Lunch</button>
            <button className="ButtonMenu">Diner</button> */}
            {/* <button className="ButtonMenu">All Menu</button>
          <button className="ButtonMenu">All Menu</button> */}
          </div>
          <div className="OurMenu">{routes}</div>
        </div>
      </div>

      <div className="MenuImages">
        <SliderMenu images={images} />
      </div>
    </div>
  );
};

export default Menu;
