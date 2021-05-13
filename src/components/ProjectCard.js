import React from 'react';
// import styled from 'styled-components';
import '../styles/components/ProjectCard.scss';

export default function projectCard(props) {
  const { hrefLink, imgSrc, imgAlt, projectName } =
    props.project;
  return (
    <div className="project">
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
    </div>
  );
}
