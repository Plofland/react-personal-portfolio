import React from 'react';

//*Components
import Nav from './components/Nav';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

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
			<Intro />
			<Projects />
			<AboutMe />
			<ContactMe />
		</>
	);
}

export default App;
