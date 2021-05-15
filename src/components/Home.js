import React from 'react';

//*Components
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

//*Styling
import '../styles/components/Home.scss';

export default function Home() {
  return (
    <div id="homeContent">
      <Intro />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}
