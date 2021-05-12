import React from 'react';

//*Components
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

//*Styling

//*Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//*Creation of Library of Icons
library.add(fas, fab);

function App() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
