import React from 'react';
import Project from './Project';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import '../styles/ProjectList.css';

const ProjectList = ({ projects }) => {
	const [ currentProject, setCurrentProject ] = useState(0);
	const handleNext = () => {
		setCurrentProject(currentProject !== projects.length - 1 ? currentProject + 1 : 0);
	};

	const handlePrevious = () => {
		setCurrentProject(currentProject !== 0 ? currentProject - 1 : projects.length - 1);
	};

	return (
		<div className="project-list-container">
			{/* <button className="carousel-button" onClick={handlePrevious}>
				previous
			</button> */}
			<i onClick={handleNext} class="fa-2x fas fa-arrow-left" onClick={handlePrevious} />

			<SwitchTransition>
				<CSSTransition key={currentProject} classNames={'fade'} timeout={600}>
					<Project project={projects[currentProject]} />
				</CSSTransition>
			</SwitchTransition>

			{/* <button className="carousel-button" onClick={handleNext}>
				next
			</button> */}
			<i onClick={handleNext} class="fa-2x fas fa-arrow-right" />
		</div>
	);
};

export default ProjectList;
