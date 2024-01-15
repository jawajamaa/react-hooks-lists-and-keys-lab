import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, id }) {
  console.log(projects);
  const ProjectItems = projects.map(project=>{
    return < ProjectItem 
    name={project.name}
    about={project.about}
    technologies={project.technologies}
      /> 
  });
  console.log(ProjectItems);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <div key = { id } > { ProjectItems } </div>
      </div>
    </div>
  );
}

export default ProjectList;
