import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import "./Slider.css";

import chef1 from "../../../assets/img/chef/chef2.jpg";
import chef2 from "../../../assets/img/chef/chef4.jpg";
import chef3 from "../../../assets/img/chef/chef1.jpg";
import chef4 from "../../../assets/img/rest4.jpg";
import chef5 from "../../../assets/img/rest5.jpg";
import chef6 from "../../../assets/img/rest1.jpg";

const Sliderr = (props) => {
  //   const images = [chef1, chef2, chef3];

  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="Slider">
      <div className="Imgslider">
        <Slider {...settings}>
          {props.images.map((item) => (
            <div key={item}>
              <img src={item} alt={item.alt} />
            </div>
          ))}
        </Slider>
        {/* hi */}
      </div>

      {/* <img src={chef3} alt="work please" /> */}
    </div>
  );
};
export default Sliderr;
