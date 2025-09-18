import React from "react";
import palestineflag from "../../Images/palestineflag.webp";
import "./banner.scss";
import { Typewriter } from "react-simple-typewriter";
import img from "../../Images/bars.png";

const Banner = () => {
  return (
    <div className="banner">
      <Typewriter
        words={[
          "Supporting Palestine.",
          "Israel is terrorist illegal state.",
          "Israel is baby killer.",
          "640K people have been killed by Israel, 65% of them are women and children.",
          "Long Live Palestine.",
        ]}
        loop
        typeSpeed={15}
        deleteSpeed={10}
        delaySpeed={3000}
      />{" "}
      <img src={palestineflag} alt="" />
    </div>
  );
};

export default Banner;
