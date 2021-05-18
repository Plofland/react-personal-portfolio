import React from 'react';
// import { Route, Switch } from 'react-router-dom';

//*Components
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './ContactMe';

//*Styling
import '../styles/components/Home.scss';

export default function Home() {
  return (
    <div id="homeContent">
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
