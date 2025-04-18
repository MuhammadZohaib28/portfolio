import React from "react";
import crypto from "../../Images/facebook.png";
import CustomPaging from "./Carousel";
import EmblaCarousel from "../../common/EmblaCarousel";
import "./freelance.scss";
import "../../common/embla.css";
import { freelanceData } from "./data";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

// const OPTIONS = { dragFree: true, loop: false };

// console.log(SLIDES, "======NEWSLIDES====");

const Freelance = () => {
  return (
    <section className="freelance">
      <div className="container">
        <div className="top">
          <h1>Freelance Gigs</h1>
          <h2>Quality Work, On Your Schedule. 🧩</h2>
        </div>
      </div>

      {freelanceData.map((j, index) => {
        return (
          <div className="carousel-container">
            <div className="carousel-container-inner">
              <div className="carousel-container-inner-slides">
                <EmblaCarousel slides={j.projectpictures}  />
              </div>

              <div className="carousel-container-text-data">
                <h1 className="title">{j.projectname}</h1>

                <div className="carousel-container-text-data-bottom">
                  <div className="carousel-container-text-data-bottom-top">
                    <h3>
                      <IoMdTime className="h3-icon" />
                      {j.tagline}
                    </h3>
                    <span>
                      <BsArrowRepeat className="span-icon" />
                      Price: ${j.price}
                    </span>
                  </div>

                  <p>
                    {j.desc}
                  </p>

                  <div className="carousel-container-text-data-bottom-middle">
                    <span>{j.delivery}-day delivery</span>
                    <span>{j.rev} Revisions</span>
                  </div>

                  <ul className="">
                    {j.tags.map((tags, index) => (
                      <div>
                        <FaCheck className="icon" /> <li key={index}>{tags}</li>
                      </div>
                    ))}
                  </ul>
                  <a href={j.giglink} target="_blank">
                    <button>Contact</button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </section>
  );
};

export default Freelance;
