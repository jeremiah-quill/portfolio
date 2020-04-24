import React from 'react';

const Project = ({ project }) => {
	return (
		<div
			className="project-card project-image"
			style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${project.image}")` }}
		>
			<div className="project-description">{project.description}</div>
			<div className="project-bottom-bar">
				<div className="project-links">
					<a href={project.liveURL} target="_blank" rel="noopener noreferrer">
						Live
					</a>
					<a href={project.codeURL} target="_blank" rel="noopener noreferrer">
						Code
					</a>
				</div>
				<div className="project-tech-icons">
					{project.icons.map((icon) => (
						<img style={{ width: '22px', margin: '5px' }} src={icon.image} alt={icon.alt} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
