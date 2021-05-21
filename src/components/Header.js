import React from 'react';
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
		</div>
	);
}
