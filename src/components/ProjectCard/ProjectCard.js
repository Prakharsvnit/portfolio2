import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles1 = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
      textDecoration: "none",
      color: "white",
    },
    float: "right",
    margin: "10px",
  });
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <div>
              <img src={repo.image} alt="img" style={{ width: "100%" }} />
            </div>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div>
              <a
                {...styles1}
                className="general-btn"
                href={repo.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                {...styles1}
                className="general-btn"
                href={repo.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
