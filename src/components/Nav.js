import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function nav() {
  return (
    <>
      <StyledNavBar>
        <StyledHeader>Peter Lofland</StyledHeader>
        <StyledLink>
          <Link to="/">Home</Link>
          <Link to="/aboutMe">About Me</Link>
          <Link to="/projects">Projects</Link>
        </StyledLink>
      </StyledNavBar>
    </>
  );
}

const StyledNavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledLink = styled.div`
  border: 3px solid white;
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-evenly;
  /* text-decoration: none; why no work?*/
`;

const StyledHeader = styled.div`
  font-size: 2.5rem;
`;
