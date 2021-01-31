import React from 'react';
import styled from 'styled-components';

export default function projectCard(props) {
  const { hrefLink, imgSrc, imgAlt, projectName } = props.project;
  return (
    <StyledCard>
      <a
        className="project-tile"
        href={hrefLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="project-img" src={imgSrc} alt={imgAlt} />
        <p class="project-title">
          <span className="code">&lt;</span>
          {projectName}
          <span className="code">&#47;&gt;</span>
        </p>
      </a>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 2%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; //box-shadow for when the background is a light color

  .project-tile {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 1px 1px darkslategray;
    border-radius: 0 0 5px 5px;
    text-decoration: none;
    /* border: 1px solid yellow; */
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
    /* border: 1px solid white; */
    background-color: #ad9158;
    color: black;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 3% 3%;
    border-radius: 0 0 5px 5px;
  }

  .code {
    color: #ad9158;
    background-color: #ad9158;
    transition: 0.3s ease-in-out;
  }

  .project-title,
  .code {
    font-size: 1.4rem;
  }

  .project-tile:hover .code {
    color: black;
  }
`;
