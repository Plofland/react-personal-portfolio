import React from 'react';
import '../styles/components/Navbar.scss';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<a href="#Intro">
						<div className="active dot">
							
						</div>
					</a>
				</li>
				<li>
					<a href="#Projects">
						<div className="dot"></div>
					</a>
				</li>
				<li>
					<a href="#Skills">
						<div className="dot"></div>
					</a>
				</li>
				<li>
					<a href="#AboutMe">
						<div className="dot"></div>
					</a>
				</li>
				<li>
					<a href="#Contact">
						<div className="dot"></div>
					</a>
				</li>
			</ul>
		</nav>
	);
}
