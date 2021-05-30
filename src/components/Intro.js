import React from 'react';
import '../styles/components/Intro.scss';
import coder from '../assets/python-2.gif';
import coderStill from '../assets/python-2-still.jpg';

export default function Intro() {
	return (
		<div className="introSection">
			<div className="sectionTitle">
				<h2>Full Stack Web Developer</h2>
			</div>
			<div className="intro">
				<div className="introDescription">
					<p>Hello! I'm Peter.</p>
					<p>
						I have a passion for coding to solve
						problems and designing websites.
					</p>
					<p>
						I'd love to be a part of your team
						and help build your idea or project
						into a real world product.
					</p>
				</div>
				<div className="callToActionContainer">
					<a
						href="https://calendly.com/plofland"
						target="_blank"
						rel="noreferrer"
					>
						<div id="button">
							<h2>Get in Touch</h2>
						</div>
					</a>
				</div>
			</div>
			<div id="introImg">
				{window.innerWidth > 414 ? (
					<img
						src={coder}
						alt="Graphic of coder sitting at a desk"
					></img>
				) : (
					<img
						src={coderStill}
						alt="Animation of coder sitting at a desk"
					></img>
				)}
			</div>
		</div>
	);
}
