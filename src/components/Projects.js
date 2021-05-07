import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';

export default function Projects(props) {
  // const { projectsList } = props;

  return (
    <StyledProjects>
      {projectsList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
