import React from "react";
import Row from "react-bootstrap/Row";
import { myProjects } from "../../constants/myProjects";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <Row className="projectContainer">
        {myProjects.map((project, i) => {
          return (
            <ProjectDetail
              title={project.title}
              script={project.script}
              style={project.style}
              code={project.code}
              img={project.image}
              gitLink={project.github}
              web={project.web}
              subTitle={project.subTitle}
              key={i}
            />
          );
        })}
      </Row>
    </section>
  );
}

export default Projects;
