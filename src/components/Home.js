import React from 'react';

//*Components
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './ContactMe';
import Skills from './Skills';

//*Styling
import '../styles/components/Home.scss';

export default function Home() {
  return (
    <div id="homeContent">
      <Intro />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
