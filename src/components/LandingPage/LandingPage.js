import React from "react";

import { FaYelp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import chef1 from "../../assets/img/chef/chef2.jpg";
import chef4 from "../../assets/img/chef/chef5.jpg";
import restaurantPicture1 from "../../assets/img/rest17.jpg";
import restaurantPicture2 from "../../assets/img/rest16.jpg";
import foodImage1 from "../../assets/img/food/food1.jpg";
import foodImage2 from "../../assets/img/food/food10.jpg";

import "./LandingPage.css";
import "../Home/Home.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="SectionOne"></div>
      <div className="HomeContent">
        {/* <h2 className="Icon"></h2> */}
        {/* <FaYelp className="Iconn" /> */}
        <h2 className="Welcome">Welcome</h2>
        <p className="WelcomeContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
          commodo. Aenean vehicula erat turpis. Suspendisse sed imperdiet leo.
          Vestibulum consequat blandit euismod. Aenean at lacinia libero, in
          molestie mi.
        </p>
        {/* <FaYelp className="Iconnn" /> */}
      </div>
      {/* <hr /> */}
      <div className="RestaurantSection">
        <div className="Restaurant">
          <div className="One">
            <div className="OneOne">
              <h2 className="WelcomeRest">La Belle</h2>
            </div>
            <div className="OneTwo">
              <p className="RestaurantDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum varius nisl nec purus luctus dictum. Cras dapibus
                metus eu lacinia commodo. Vestibulum consequat blandit euismod.
                Aenean at lacinia libero, in molestie mi. Maecenas ac turpis.
                Curabitur a tincidunt tortor. Cras at dui pellentesque, varius
                sapien id, porta mauris. Sed tempus dui ut justo aliquam, vel
              </p>

              <button className="RestaurantButton">
                More <FaArrowRight />{" "}
              </button>
            </div>
          </div>

          <div className="Two">
            <img
              src={restaurantPicture1}
              alt="restaurantPicture"
              width="100%"
              height="100%"
            />
          </div>
          <div className="Three">
            {" "}
            <img
              src={restaurantPicture2}
              alt="restaurantPicture"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/* ///////////////// */}
        {/* <div className="On">
            <img
                src={restaurantPicture2}
                alt="restaurantPicture"
                width="100%"
                height="100%"
            />
            </div>
            <div className="On">
            <img src={chef4} alt="restaurantPicture" width="100%" height="100%" />
            </div> */}
      </div>

      <div className="MenuSectionPage">
        <div className="MenuPageImage">
          <img
            src={restaurantPicture1}
            alt="restaurantPicture"
            width="100%"
            height="100%"
          />
        </div>
        <div className="MenuPageContent">
          <h2 className="WelcomeRest">Happenings</h2>
          <p className="RestaurantDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
            commodo. Vestibulum consequat blandit euismod. Aenean at lacinia
            libero, in molestie mi. Maecenas ac turpis.{" "}
          </p>
        </div>
      </div>

      <div className="ChefSection">
        <div className="RestOne">
          {/* <img
            src={restaurantPicture1}
            alt="restaurantPicture"
            width="100%"
            height="100%"
          /> */}
          <h2 className="WelcomeRest">Team</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
            commodo. Vestibulum consequat blandit euismod. Aenean at lacinia
            libero, in molestie mi. Maecenas ac turpis
          </p>

          <button className="RestaurantButton">
            More <FaArrowRight />{" "}
          </button>
        </div>
        <div className="RestTwo">
          <div className="RestTwo1">
            <img
              src={foodImage1}
              alt="restaurantPicture"
              width="100%"
              height="100%"
            />
          </div>
          <div className="RestTwo2">
            {" "}
            <img
              src={foodImage2}
              alt="restaurantPicture"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="SectionLast">
        <div className="Reservation">
          <h2 className="Welcome">Our Food Is Delicious</h2>
          <p className="WelcomeContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius nisl nec purus luctus dictum. Cras dapibus metus eu lacinia
            commodo. Aenean vehicula erat turpis. Suspendisse sed imperdiet leo.
            Vestibulum consequat blandit euismod. Aenean at lacinia libero, in
            molestie mi.Aenean vehicula erat turpis. Suspendisse sed imperdiet
            leo. Vestibulum consequat blandit euismod. Aenean at lacinia libero,
            in molestie mi.
          </p>
          <div className="ReserveButtons">
            <button className="ButtonMenu">Menu</button>
            <button className="ButtonReserve">Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
