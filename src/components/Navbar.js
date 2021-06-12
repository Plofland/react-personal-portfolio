import React, {useState} from 'react';
import '../styles/components/Navbar.scss';

export default function Navbar() {
	// document
	// 	.querySelector('.navbar')
	// 	.addEventListener('click', (e) => {
	// 		// ignore it if the click isn't on an anchor element
	// 		if (e.target.tagName.toLowerCase() === 'a') {
	// 			// remove the 'active' class from all of the nav anchors
	// 			document
	// 				.querySelectorAll('.navbar a')
	// 				.forEach((e) =>
	// 					e.classList.remove('current')
	// 				);

	// 			// add the 'current' class to the clicked element
	// 			e.target.classList.add('current');
	// 		}
	// 	});

	const [isCurrent, setCurrent] = useState('');

	const clickListener = () => {
        setCurrent(!isCurrent)
		// e.target.className.add('current')
	};

	return (
		<nav className="navbar navbar-fill">
			<ul>
				<li
					className={isCurrent ? 'current' : ''}
					onClick={clickListener}
				>
					<a href="#intro">Intro</a>
				</li>
				<li
					className={isCurrent ? 'current' : ''}
					onClick={clickListener}
				>
					<a href="#projects">Projects</a>
				</li>
				<li
					className={isCurrent ? 'current' : ''}
					onClick={clickListener}
				>
					<a href="#skills">Skills</a>
				</li>
				<li
					className={isCurrent ? 'current' : ''}
					onClick={clickListener}
				>
					<a href="#aboutMe">AboutMe</a>
				</li>
				<li
					className={isCurrent ? 'current' : ''}
					onClick={clickListener}
				>
					<a href="#contacts">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
