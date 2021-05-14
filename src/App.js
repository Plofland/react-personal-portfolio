import React from 'react';

//*Components
import Nav from './components/Nav';
import Home from './components/Home';

//*Styling
import './styles/App.scss';

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
      <Home />
    </>
  );
}

export default App;
