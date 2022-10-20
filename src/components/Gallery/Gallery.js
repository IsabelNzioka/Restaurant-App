import React from "react";
import "./Gallery.css";

import Image1 from "../../assets/img/rest1.jpg";
import Image2 from "../../assets/img/food/food1.jpg";
import Image3 from "../../assets/img/rest3.jpg";
import Image4 from "../../assets/img/rest4.jpg";
import Image5 from "../../assets/img/food/food5.jpg";
import Image6 from "../../assets/img/rest6.jpg";
import Image7 from "../../assets/img/rest7.jpg";
import Image8 from "../../assets/img/rest8.jpg";
import Image9 from "../../assets/img/rest9.jpg";
import Image10 from "../../assets/img/rest10.jpg";
import Image11 from "../../assets/img/food/food2.jpg";

import Image12 from "../../assets/img/food/food6.jpg";
import Image13 from "../../assets/img/food/food8.jpg";

import Image14 from "../../assets/img/food/food9.jpg";
import Image15 from "../../assets/img/food/food10.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Image1">
        <img src={Image1} alt="Restaurant" />
      </div>
      <div className="Image2">
        <img src={Image2} alt="Restaurant" />
      </div>
      <div className="Image3">
        <img src={Image3} alt="Restaurant" />
      </div>
      <div className="Image4">
        <img src={Image4} alt="Restaurant" />
      </div>
      <div className="Image5">
        <img src={Image5} alt="Restaurant" />
      </div>
      <div className="Image6">
        <img src={Image6} alt="Restaurant" />
      </div>
      <div className="Image7">
        <img src={Image7} alt="Restaurant" />
      </div>
      <div className="Image8">
        <img src={Image8} alt="Restaurant" />
      </div>
      <div className="Image9">
        <img src={Image9} alt="Restaurant" />
      </div>
      <div className="Image10">
        <img src={Image10} alt="Restaurant" />
        {/* 10 */}
      </div>
      <div className="Image11">
        <img src={Image11} alt="Restaurant" />
        {/* 11 */}
      </div>

      <div className="Image12">
        <img src={Image12} alt="Restaurant" />
        {/* 12 */}
      </div>
      <div className="Image13">
        <img src={Image13} alt="Restaurant" />
        {/* 13 */}
      </div>
      <div className="Image14">
        <img src={Image14} alt="Restaurant" />
        {/* 14 */}
      </div>
      <div className="Image15">
        <img src={Image15} alt="Restaurant" />
        {/* 15 */}
      </div>
    </div>
  );
};

export default Gallery;
