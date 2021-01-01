import React from 'react';
import styled from 'styled-components';

export default function projectCard(props) {
  const { hrefLink, imgSrc, imgAlt, projectName } = props.project;
  return (
    <styledCard>
      <a className="project-tile" href={hrefLink} target="_blank">
        <img className="project-img" src={imgSrc} alt={imgAlt} />
        <p class="project-title">
          <span className="code">&lt;</span>
          {projectName}
          <span className="code">&#47;&gt;</span>
        </p>
        {/*maybe change this p tag to a div tag if I have issues with the projectName */}
      </a>
    </styledCard>
  );
}

const styledCard = styled.div`
  .project-tile {
    display: flex;
    width: 20%;
    box-shadow: 1px 1px darkslategray;
    border-radius: 0 0 5px 5px;
  }

  .project-img {
    width: 100%;
    opacity: 0.25s ease-in-out;
  }

  .project-img:hover {
    opacity: 100%;
  }

  .project-title {
    display: flex;
    color: black;
    background-color: #ad9158;
    width: 100%;
    padding: 3% 3%;
    border-radius: 0 0 5px 5px;
    justify-content: center;
  }

  .code {
    color: #ad9158;
    transition: 0.5s ease-in-out;
  }

  .project-title,
  .code {
    font-size: 1.6rem;
  }

  .project-tile:hover .code {
    color: black;
  }
`;
