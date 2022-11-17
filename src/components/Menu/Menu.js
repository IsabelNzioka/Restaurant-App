import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Menu.css";

import food from "../../assets/img/food/food1.jpg";
import Lunch from "./Menus/Lunch";
import Diner from "./Menus/Dinner";
import Breakfast from "./Menus/Breakfast";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="MenuMain">
        {/* <img src={food} alt="MenuImage" width="100%" height="100%" /> */}
      </div>

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

      <Routes>
        <Route path="/menu/lunch" element={<Lunch />} />
        <Route path="/menu/diner" element={<Diner />} />
        <Route path="/menu/breakfast" element={<Breakfast />} />
      </Routes>

      <div className="Menus">
        <button className="ButtonMenu">All Menu</button>
        <button className="ButtonMenu">All Menu</button>
        <button className="ButtonMenu">All Menu</button>
        <button className="ButtonMenu">All Menu</button>
        <button className="ButtonMenu">All Menu</button>
      </div>
      <div className="OurMenu">
        <Lunch />
      </div>
    </div>
  );
};

export default Menu;
