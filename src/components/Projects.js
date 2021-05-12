import React from 'react';
// import styled from 'styled-components';
import projectsList from '../projectsList';
import ProjectCard from './ProjectCard';

export default function Projects(props) {
  // const { projectsList } = props;

  return (
    <div className='projectContainer'>
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
    </div>
  );
}

// const StyledProjects = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 80%;
//   margin: 0 auto;
//   padding: 5%;

//   h2 {
//     display: flex;
//     justify-content: center;
//   }

//   .project-tiles {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//   }

//   //*Tablet Styling
//   @media (max-width: 1000px) {
//     width: 100%;
//     padding: 0;
//   }

//   //*Phone Styling
//   @media (max-width: 600px) {
//     margin: 0 auto;
//     padding: 0;
//   }

//   //*Large Monitor Styling
//   @media (min-width: 1400px) {
//   }
// `;
