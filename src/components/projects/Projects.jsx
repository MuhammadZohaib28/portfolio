import React from "react";
import "./projects.scss";
import project1 from '../../Images/sc.png'

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="top">
          <h1>Portfolio</h1>
          <h2>Each project is a unique piece of development 🧩</h2>
        </div>
        <div className="bottom">
          <div className="containerb">
            <div className="leftb">
              <img src={project1} alt=""/>
            </div>
            <div className="right">
              <div className="top">
                <h3>Project Name</h3>
              </div>

              <div className="mid">
                <p>Project Description</p>
                <div className="midbtn">
                  <span>ReactJS</span>
                  <span>SCSS/SASS</span>
                </div>
              </div>

              <div className="bottom">
                <div className="left">
                  <span>Code</span>
                  <img src="" alt="" />
                </div>
                <div className="right">
                  <span>Live Demo</span>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
