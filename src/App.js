import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import projectsList from './projectsList';

//playing around with declared props vs. stylized components
const theme = {
  font: 'Times New Roman'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Nav />
        <Route path="/projects">
          <Projects props={projectsList} />
        </Route>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route exact path="/">
          <Welcome />
          <AboutMe />
          <Projects props={projectsList} />
        </Route>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  /* background-color: rgba(128, 128, 0, 0.6); */
  font-family: 'Fira Sans', sans-serif;
  font-size: 2rem;
  color: whitesmoke;

  .project-tile {
    display: flex;
    width: 20%;
    box-shadow: 1px 1px darkslategray;
    border-radius: 0 0 5px 5px;
  }

  .project-img {
    width: 100%;
    opacity: 0.25s ease-in-out;
  }

  .project-img:hover {
    opacity: 100%;
  }

  .project-title {
    display: flex;
    color: black;
    background-color: #ad9158;
    width: 100%;
    padding: 3% 3%;
    border-radius: 0 0 5px 5px;
    justify-content: center;
  }

  .code {
    color: #ad9158;
    transition: 0.5s ease-in-out;
  }

  .project-title,
  .code {
    font-size: 1.6rem;
  }

  .project-tile:hover .code {
    color: black;
  }
`;
