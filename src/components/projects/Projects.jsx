import React from "react";
import "./projects.scss";
import project1 from "../../Images/sc.png";
import github from "../../Images/github.png";
import live from "../../Images/live.png";
import { projectdata } from "./data";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="top">
          <h1>Portfolio</h1>
          <h2>Each project is a unique piece of development 🧩</h2>
        </div>

        {projectdata.map((item) => {
          return (
            <div className="bottom" key={item.id}>
              <div
                className={
                  item.rowreverse == true
                    ? "containerb containerbrow"
                    : "containerb"
                }
              >
                <div className="leftb">
                  <img src={item.projectpicture} alt="" />
                  <div class="overlay">
                    <span>Hover here</span>
                  </div>
                </div>
                <div className="rightb">
                  <div className="topr">
                    <h3>{item.projectname}</h3>
                  </div>

                  <div className="midb">
                    <p>{item.projectdesc}</p>
                    <div className="midbtn">
                      <span>{item.projectlanguage1}</span>
                      <span>{item.projectlanguage2}</span>
                    </div>
                  </div>

                  <div className="bottomb">
                    <div className="btns">
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rightbb"
                      >
                        {item.livedemo ? (
                          <span>Live demo</span>
                        ) : (
                          <h3>Not Avaialble</h3>
                        )}

                        <img src={live} alt="" className="imglive" />
                      </a>
                    </div>
                    <div className="btnss">
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rightbb"
                      >
                        <span>Code</span>
                        <img src={github} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
