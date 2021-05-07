import React from 'react';
import styled from 'styled-components';

export default function projectCard(props) {
  const {
    hrefLink,
    imgSrc,
    imgAlt,
    projectName
  } = props.project;
  return (
    <StyledCard>
      <a
        className="project-tile"
        href={hrefLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="project-img"
          src={imgSrc}
          alt={imgAlt}
        />
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
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 2%;

  .project-tile {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 
      /* top */ rgba(255, 255, 255, 0.1) 0px -6px
        10px,
      /* right */ rgba(255, 255, 255, 0.1) 6px 0px 10px,
      /* bottom */ rgba(255, 255, 255, 0.1) 0px 6px 10px,
      /* left */ rgba(255, 255, 255, 0.1) -6px 0px 10px;
  }

  .project-tile:hover {
    box-shadow:
      /* top */ rgba(255, 255, 255, 0.25) 0px -6px
        20px,
      /* right */ rgba(255, 255, 255, 0.25) 6px 0px 20px,
      /* bottom */ rgba(255, 255, 255, 0.25) 0px 6px 20px,
      /* left */ rgba(255, 255, 255, 0.25) -6px 0px 20px;
    transition: 0.4s ease-in-out;
  }

  .project-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .project-title {
    display: flex;
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
    transition: 0.4s ease-in-out;
  }

  .project-title,
  .code {
    font-size: 1.4rem;
  }

  .project-tile:hover .code {
    color: rgba(0, 0, 0, 75%);
  }
`;
