import React from 'react';
import styled from 'styled-components';

export default function Welcome() {
  return (
    <StyledWelcome>
      <h1>Welcome</h1>
    </StyledWelcome>
  );
}

const StyledWelcome = styled.div`
  /* width: 100%; */
  /* border: 1px solid black; */
  text-align: center;
  padding: 4%;
`;
