import React from "react";

import "./Home.css";

import Sliderr from "./Slider/Slider";

import chef1 from "../../assets/img/chef/chef2.jpg";
import chef2 from "../../assets/img/chef/chef1.jpg";
import chef3 from "../../assets/img/chef/chef4.jpg";

import chef4 from "../../assets/img/chef/chef5.jpg";
import chef5 from "../../assets/img/chef/chef6.jpg";
import chef6 from "../../assets/img/chef/chef7.jpg";

import { FaYelp } from "react-icons/fa";

const Home = () => {
  const images = [chef1, chef2, chef3];
  const images1 = [chef4, chef5, chef6];

  return (
    <div className="Home">
      <div className="Main">
        <button className="ReserveButton">Reservations</button>
      </div>
      <div className="HomeContent">
        <h2 className="Icon">{/* <FaTablets /> */}</h2>{" "}
        <FaYelp className="Iconn" />
        <h2 className="Welcome">Welcome</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
          commodo. Aenean vehicula erat turpis. Suspendisse sed imperdiet leo.
          Vestibulum consequat blandit euismod. Aenean at lacinia libero, in
          molestie mi. Maecenas ac diam tincidunt tortor consectetur elementum
          non ac metus. Duis sollicitudin dui vitae aliquet convallis. Mauris a
          viverra turpis. Curabitur a tincidunt tortor. Cras at dui
          pellentesque, varius sapien id, porta mauris. Sed tempus dui ut justo
          aliquam, vel
        </p>
        <FaYelp className="Iconnn" />
        {/* <h3>About Us</h3> */}
      </div>

      <div className="SectionMain">
        <div className="Restaurant">
          <div className="One">
            <div className="OneOne">
              <h2 className="Teamm">Restaurant</h2>
            </div>
            <div className="OneTwo">hi</div>
          </div>

          <div className="Two">two</div>
          <div className="Three">three</div>
        </div>

        <div className="ChefSection">
          <div className="ChefSpecial">
            {/* <img src={background} alt="chef" width="100%" height="100%" /> */}
            <Sliderr images={images} />
          </div>
          <div className="ChefNames">
            <div className="NamesTitle">
              <h2 className="Team">Our Team</h2>
            </div>
            <div className="ChefNamesList">hi</div>
          </div>
          <div className="ChefVIP">
            <Sliderr images={images1} />
          </div>
        </div>
      </div>
      <div className="Reviews">hi</div>
    </div>
  );
};

export default Home;
