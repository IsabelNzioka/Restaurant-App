import React from "react";
import "./Footer.css";

import { FaYelp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <FaYelp className="FooterIcon" />
      <div className="FooterContent">
        <div className="Contact">
          <div className="ContactInfo">
            <h1>La Belle</h1>
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

          <div className="OpeningHours">
            <h2>Opening Hours</h2>
            <p>
              weekdays <span>09:00 - 19:00</span>
            </p>
            <p>
              Saturday <span>09:00 - 21:00</span>
            </p>
            <p>
              weekdays <span>09:00 - 19:00</span>
            </p>
          </div>
        </div>

        <div className="General">
          <div className="GeneralInfo">
            <h2>General</h2>
            <p>General FAQ</p>
            <p>terms and conditions</p>
            <p>privacy policy</p>
            <p>press</p>
            <p>careers</p>
          </div>

          <div className="Subscribe">
            <h2> Sign Up for our Newsletter</h2>
            <button className="SignUp">Sign Up</button>

            <FaYelp className="FooterIcon" />
            <div className="Socials">
              <FaInstagram className="SocialIcon" />
              <FaTwitter className="SocialIcon" />
              <FaFacebook className="SocialIcon" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="Copyright">
        <p>@copyright 2022 Isabel</p>
      </div>
    </div>
  );
};

export default Footer;
