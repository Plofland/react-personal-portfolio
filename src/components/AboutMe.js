import React from 'react';
import styled from 'styled-components';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <StyledAbout>
      <StyledSelfDescription>
        <h1>Hi there, I'm Peter</h1>
        <h4>FULL STACK WEB DEVELOPER</h4>
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
      </StyledSelfDescription>
      <StyledBustShot>
        <img src={bustShot} alt="Peter Lofland bust shot" />
      </StyledBustShot>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  padding: 4%;
  /* border: 1px solid white; */
`;

const StyledSelfDescription = styled.div`
  text-align: center;
  padding: 2%;
  /* border: 1px solid white; */
  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }
  h4 {
    font-size: 1rem;
    margin: 1rem 0;
  }
  p {
    font-size: 1.4rem;
    margin: 4rem 0;
  }
`;

const StyledBustShot = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 2%;
    height: 50vh;
    border-radius: 50px;
    /* background-color: green; */
    /* background-position: 20px 20px; */
    box-shadow: 4px 8px #008b74;
  }
  /* border: 1px solid white; */
`;
