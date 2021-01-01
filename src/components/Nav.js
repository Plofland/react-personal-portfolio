import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function nav() {
  return (
    <styledNav>
      <Link to="/">Home</Link>
      <Link to="/aboutMe">About Me</Link>
      <Link to="/projects">Projects</Link>
    </styledNav>
  );
}

const styledNav = styled.div`
  /* text-decoration: none;
  font-size: 2rem; */
  border: 2px solid red;
  display: flex;
  justify-content: end;
`;
