import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

import '../styles/components/Home.scss';

export default function Home() {
  return (
    <div id="homeContent">
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}
