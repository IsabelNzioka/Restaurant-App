import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import { FaYelp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  //............
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        {/* <h3 className="Logo">Logo</h3> */}
        <nav>
          <NavigationItems />
        </nav>
        <hr />

        <div className="Location">
          <p>
            <FaMapMarkerAlt /> karen bay shore, Nairobi, Kenya
          </p>
          <p>
            <FaPhoneAlt /> +254746282937
          </p>
          <p>
            <FaPhoneAlt /> +254783493629
          </p>
        </div>
        <div className="Socialss">
          <p>
            {" "}
            <FaInstagram />
          </p>
          <p>
            {" "}
            <FaTwitter />
          </p>
          <p>
            {" "}
            <FaFacebook />
          </p>
          <p>
            {" "}
            <FaFacebook />
          </p>
          <p>
            {" "}
            <FaFacebook />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
