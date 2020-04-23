import React from 'react';

const Project = ({ project }) => {
	return (
		<div className="project-card">
			<a
				href={project.liveURL}
				target="_blank"
				rel="noopener noreferrer"
				className="project-image"
				style={{ backgroundImage: `url("${project.image}")` }}
			/>
			<div className="project-description cc">{project.description}</div>
			<div className="project-tech-icons cc">
				<i className="fab fa-react" />
				<i className="fab fa-js-square" />
				<i className="fab fa-css3-alt" />
			</div>
			<div className="project-links cc">
				<a href={project.liveURL} target="_blank" rel="noopener noreferrer">
					Live
				</a>
				<a href={project.codeURL} target="_blank" rel="noopener noreferrer">
					Code
				</a>
			</div>
		</div>
	);
};

export default Project;
