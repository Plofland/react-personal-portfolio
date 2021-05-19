import React from 'react';
import '../styles/components/Intro.scss';
import coder from '../assets/python-2.gif';

export default function Intro() {
	return (
		<div className="introSection">
			<div className="intro">
				<div className="sectionTitle">
					<h2>Full Stack Web Developer</h2>
				</div>
				<div className="introDescription">
					<p>Hello! I'm Peter.</p>
					<p>
						I love coding to solve problems and
						designing websites.
					</p>
				</div>
					<div className="callToActionContainer">
						<a
							href="https://calendly.com/plofland"
							target="_blank"
							rel="noreferrer"
							className="callToActionContainer"
						>
							<div id="button">
								<h2>Get in Touch</h2>
							</div>
						</a>
					</div>
			</div>
			<div id="introImg">
				<img
					src={coder}
					alt="animation of coder sitting at a desk"
				></img>
			</div>
		</div>
	);
}
