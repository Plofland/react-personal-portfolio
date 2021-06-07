import React from 'react';
import '../styles/components/ProjectCard.scss';

export default function projectCard(props) {
	const {
		hrefLink,
		description,
		imgSrc,
		imgAlt,
		projectName
	} = props.project;
	return (
		<div className="project">
			<a
				className="project-tile"
				href={hrefLink}
				target="_blank"
				rel="noreferrer"
			>
				<div className="img-container">
					{window.innerWidth > 835 ? (
						<div id="text-overlay">
							<p>{description}</p>
						</div>
					) : (
						<div>
							<p></p>
						</div>
					)}
					<img
						className="project-img"
						src={imgSrc}
						alt={imgAlt}
					/>
				</div>
				<h4 class="project-title">
					<span className="code">&lt;</span>
					{projectName}
					<span className="code">&#47;&gt;</span>
				</h4>
			</a>
		</div>
	);
}
