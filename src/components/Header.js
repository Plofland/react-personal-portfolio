import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import monstera from '../assets/monsteraBackground.jpg'

export default function Header() {
	return (
		<div className="headerSection">
      <img src={monstera} alt='monstera plant banner'/>
			<a
				href="https://www.linkedin.com/in/peter-lofland/"
				target="_blank"
				rel="noreferrer"
			>
					<h1>Peter Lofland</h1>
			</a>

      {/* Leftover code from when this was a navbar, keeping just in case */}
			{/* <div className="links"> */}
			{/* <Link to="/projects" className="link">
          Projects
        </Link>
        <Link to="/aboutMe" className="link">
          About Me
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link> */}
			{/* <a href="#projects" className="link">
          Projects
        </a>
        <a href="#aboutMe" className="link">
          About Me
        </a>
        <a href="#contact" className="link">
          Contact
        </a> */}
			{/* </div> */}
		</div>
	);
}
