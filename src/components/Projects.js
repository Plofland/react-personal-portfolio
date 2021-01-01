import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';

export default function projects(props) {
  // const { projectsList } = props;

  return (
    <styledProjects>
      {projectsList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </styledProjects>
  );
}

const styledProjects = styled.div``;
