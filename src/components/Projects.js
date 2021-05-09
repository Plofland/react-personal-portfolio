import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';

export default function Projects(props) {
  // const { projectsList } = props;

  return (
    <StyledProjects>
      <h2>Projects</h2>
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
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 5%;
  border: 1px solid black;

  h2 {
    display: flex;
    justify-content: center;
  }

  .project-tiles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid red;
  }

  //*Tablet Styling
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    h2 {
      display: flex;
      justify-content: center;
    }

    .project-tiles {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      border: 1px solid red;
    }
  }

  //*Phone Styling
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    h2 {
      display: flex;
      justify-content: center;
    }

    .project-tiles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border: 1px solid red;
    }
  }

  //*Large Monitor Styling
  @media (min-width: 1400px) {
  }
`;
