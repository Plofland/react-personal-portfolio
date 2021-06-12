import React, { useEffect } from 'react';

//*Components
import Navbar from './Navbar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Logos from './Logos';

//*Styling
import '../styles/components/Home.scss';

export default function Home() {
	let options = {
		rootMargin: '0px',
		threshold: 0.1
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (
						entry.isIntersecting &&
						entry.target.id === 'right'
					) {
						entry.target.classList.add(
							'rightAnimation'
						);
					}
					if (
						entry.isIntersecting &&
						entry.target.id === 'left'
					) {
						entry.target.classList.add(
							'leftAnimation'
						);
					} else {
						if (
							!entry.isIntersecting &&
							entry.target.id === 'left'
						) {
							entry.target.classList.remove(
								'leftAnimation'
							);
						}
						if (
							!entry.isIntersecting &&
							entry.target.id === 'right'
						) {
							entry.target.classList.remove(
								'rightAnimation'
							);
						}
					}
				});
			},
			options
		);

		let sections =
			document.querySelectorAll('.homeSection');

		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);

	return (
		<div className="homeContent">
			{/* <Navbar /> */}
			<Intro />
			<div id="left projects" className="homeSection">
				<Projects />
			</div>
			<div id="right skills" className="homeSection">
				<Skills />
			</div>
			<div id="left" className="homeSection">
				<AboutMe />
			</div>
			<div id="right" className="homeSection">
				<Contact />
			</div>
			<div id="left" className="homeSection">
				<Logos />
			</div>
		</div>
	);
}
