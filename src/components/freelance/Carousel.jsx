import React, { Component } from "react";
import Slider from "react-slick";

import { freelanceData } from "./data";

function CustomPaging() {
  const settings = {
    customPaging: function (i) {
      return <a></a>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {freelanceData.map((i, index) => {
          return (
            <div key={index}>
              <img
                src={i.projectpicture}
                style={{ height: "20rem", width: "20rem" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CustomPaging;
