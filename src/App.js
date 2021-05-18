import React from 'react';
// import { Route, Switch } from 'react-router-dom';

//*Components
import Nav from './components/Nav';
import Home from './components/Home';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import ContactMe from './components/ContactMe';

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
      {/* <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/" component={App} />
      </Switch> */}
      <Nav />
      <Home />
    </>
  );
}

export default App;
