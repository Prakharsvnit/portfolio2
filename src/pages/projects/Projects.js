import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../portfolio.js";
import "./Projects.css";
//import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  // const styles = style({
  //   backgroundColor: `${theme.accentBright}`,
  //   ":hover": {
  //     boxShadow: `0 5px 15px ${theme.accentBright}`,
  //   },
  // });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
