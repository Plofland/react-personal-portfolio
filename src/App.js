import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
// import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import img from './assets/whatTheHexDark.png';

//playing around with declared props vs. stylized components

function App() {
  return (
    <>
      <AppGlobal />

      <Wrapper>
        {/* <Header /> */}
        <Nav />
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route exact path="/">
          <Welcome />
          <Projects />
          <AboutMe />
        </Route>
      </Wrapper>
    </>
  );
}

export default App;

const AppGlobal = createGlobalStyle`
  * {
    /* background-image: url(${img}); issues her is that it set every possible background to the img*/
    /* background-image: url('./assets/whatTheHexDark.png'); */
    background-color: teal; //placeholder until I can get the background-image working
  } 
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const Wrapper = styled.div`
  /* background-color: rgba(128, 128, 0, 0.6); */
  font-family: 'Fira Sans', sans-serif;
  font-size: 2rem;
  color: whitesmoke;
`;
