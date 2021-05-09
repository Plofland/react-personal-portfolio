import React from 'react';
import styled from 'styled-components';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <StyledAbout>
      <StyledIntro>
        <StyledHello>
          <h1>Hi there, I'm Peter</h1>
          <h4>FULL STACK WEB DEVELOPER</h4>
        </StyledHello>
        <StyledBustShot>
          <img
            src={bustShot}
            alt="Peter Lofland bust shot"
          />
        </StyledBustShot>
      </StyledIntro>
      <StyledSelfDescription>
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
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;

`;

const StyledIntro = styled.div`


  //*Tablet Styling
  @media (min-width: 601px) {
    display: flex;
    align-items: center;
    align-content: space-around;

  }
`;

const StyledHello = styled.div`


  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }
  h4 {
    display: flex;
    font-size: 1rem;
    margin: 1rem 3rem;
    justify-content: flex-end;
  }

  //*Tablet Styling
  @media (min-width: 601px) {
    display: flex;
    flex-direction: column;
    h4 {
      margin: 1rem;
    }
  }

  //*Phone Styling
  @media (max-width: 600px) {

    h4 {
      font-size: 1rem;
      margin: 1rem 2rem;
      justify-content: flex-end;
    }
  }
`;

const StyledSelfDescription = styled.div`
  text-align: center;
  padding: 2%;

  p {
    font-size: 1.4rem;
    margin: 4rem 0;
  }

  //*Phone Styling
  @media (max-width: 600px) {
    /* display: flex; */
    justify-content: center;
  }
`;

const StyledBustShot = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 2%;
    height: 50vh;
    border-radius: 50px;
    box-shadow: 4px 8px #008b74;
  }

  //*Phone Styling
  @media (max-width: 600px) {
    img {
      padding: 0;
      height: 60vh;
      /* width: 80%; */
      border-radius: 50px;
      box-shadow: 2px 4px #008b74;
    }
  }

  //*Tablet Styling
  @media (max-width: 1000px) {
    /* display: flex;
    justify-content: center;
    img {
      padding: 0;
      height: 30vh;
      border-radius: 50px;
      box-shadow: 2px 4px #008b74;
    } */
  }

  //*Large Monitor Styling
  @media (min-width: 1400px) {
  }
`;
