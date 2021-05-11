import React from 'react';
import styled from 'styled-components';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <StyledAbout>
      <div className="hello">
        <h1>Hi there, I'm Peter</h1>
        <h4>FULL STACK WEB DEVELOPER</h4>
      </div>
      <div id="image">
        <img src={bustShot} alt="Peter Lofland bust shot" />
      </div>

      <div className="selfDescription">
        <p>
          I love coding to solve problems and designing out
          websites.
        </p>
        <p>
          I worked remotely to collaborate with teams
          produce viable web development projects within
          Lambda School's system. This gave me the chance to
          experience work environments while learning web
          development.
        </p>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    'hello image'
    'selfDescription selfDescription';

  #image {
    /* grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3; */
    grid-area: image;
    border: 1px solid yellowgreen;

    img {
      height: 100%;
      border-radius: 50px;
      box-shadow: 4px 8px #008b74;
    }
  }

  .hello {
    /* grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3; */
    border: 1px solid blue;
    grid-area: hello;

    h1 {
      font-size: 3rem;
      margin: 2rem 0;
    }
    h4 {
      font-size: 1rem;
      margin: 1rem 3rem;
      margin-right: 0;
      justify-content: flex-end;
    }
  }

  .selfDescription {
    /* grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: span 2; */
    border: 1px solid red;
    grid-area: selfDescription;

    p {
      justify-self: center;
      border: 1px solid green;
    }
  }

  /* display: grid;
  grid-template-columns: 4% 20% 15% 20% 4%;
  grid-template-rows: 2% 35% 5% 20% 2%;
  border: 1px solid blue;
  justify-content: center;
  



  */
`;
