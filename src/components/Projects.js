import React from 'react';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';
import '../styles/components/Projects.scss';

export default function Projects(props) {
  return (
    <div className="projectsSection">
      <div className="sectionTitle">
        <h2>Projects</h2>
      </div>
      <div className="projectsContainer">
        <div className="project-tiles">
          {projectsList.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
