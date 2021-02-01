import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function nav() {
  return (
    <>
      <StyledNavBar>
        <StyledHeader>Peter Lofland</StyledHeader>
        <StyledLink>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/aboutMe" className="link">
            About Me
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </StyledLink>
      </StyledNavBar>
    </>
  );
}

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-evenly;
  text-decoration: none;
  .link {
    text-decoration: none;
  }
`;

const StyledHeader = styled.div`
  font-size: 2.5rem;
`;
