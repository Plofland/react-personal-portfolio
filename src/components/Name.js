import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/components/Name.scss';

export default function Name() {
	return (
		<div className="headerSection">
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
