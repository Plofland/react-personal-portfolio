import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

//maybe this can be salvaged if the single page portfolio doesn't work out well

export default function nav() {
  return (
    <>
      <div className='navbar'>
        <h1>Peter Lofland</h1>
        <div className='links'>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <Link to="/aboutMe" className="link">
            About Me
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

// const StyledNavBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2%;
// `;

// const StyledLink = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 60%;
//   justify-content: space-evenly;
//   text-decoration: none;
//   .link {
//     text-decoration: none;
//   }
// `;

// const StyledHeader = styled.div`
//   font-size: 2.5rem;
// `;
