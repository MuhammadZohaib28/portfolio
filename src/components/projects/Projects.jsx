import React, { useEffect, useState } from "react";
import "./projects.scss";
import github from "../../Images/github.png";
import live from "../../Images/live.png";
import { projectdata } from "./data";

const Projects = () => {
  const [touch, setTouch] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    updateTouchState(); // Initial check
    window.addEventListener("resize", updateTouchState);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateTouchState);
    };
  }, []);

  const updateTouchState = () => {
    if (window.innerWidth <= 456) {
      setTouch(true);
    } else {
      setTouch(false);
    }
  };

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "mongodb", label: "MongoDB" },
    { id: "frontend", label: "Frontend" },
    { id: "nextjs", label: "Next.js" },
    { id: "reactjs", label: "React.js" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectdata
      : projectdata.filter((project) =>
          project.tags?.includes(activeFilter)
        );
  return (
    <div className="projects">
      <div className="container">
        <div className="top">
          <h1>Portfolio</h1>
          <h2>Each project is a unique piece of development 🧩</h2>
        </div>

        <div className="filters">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              className={`filter-btn ${activeFilter === button.id ? "active" : ""}`}
              onClick={() => setActiveFilter(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>

        {[...filteredProjects]
          .sort((a, b) => b.id - a.id)
          .map((item) => {
            return (
              <div className="bottom" key={item.id}>
                <div
                  className={
                    item.rowreverse == true
                      ? "containerb containerbrow"
                      : "containerb"
                  }
                >
                  <div className={item.hover ? "leftb" : "leftbb"}>
                    <img
                      src={item.projectpicture}
                      alt="projectpicture"
                      loading="lazy"
                    />

                    {item.hover ? (
                      <div className="overlay">
                        <span>
                          {touch
                            ? "Tap here to see majic. 👌"
                            : "Hover here to see majic. 👌"}
                        </span>
                      </div>
                    ) : null}
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

                          <img
                            src={live}
                            alt=""
                            className="imglive"
                            loading="lazy"
                          />
                        </a>
                      </div>

                      {item.code ? (
                        <div className="btnss">
                          <a
                            href={item.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rightbb"
                          >
                            <span>Code</span>
                            <img src={github} alt="" loading="lazy" />
                          </a>
                        </div>
                      ) : (
                        <div className="btnss">
                          <a
                            href={item.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rightbb"
                          >
                            <span>Private Repository</span>
                            <img src={github} alt="" loading="lazy" />
                          </a>
                        </div>
                      )}
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
