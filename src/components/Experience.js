import React from 'react';
import mongodb from '../images/mongodb-icon.svg';
import reactIcon from '../images/react-icon.svg';
import cssIcon from '../images/css-icon.svg';
import nodejsIcon from '../images/nodejs-icon.svg';
import '../styles/Experience.css';

const Experience = () => {
	return (
		<div className="Experience">
			<div class="skills-card">
				<div class="title">Technologies I work with</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={cssIcon} />
						<span>CSS</span>
					</li>

					<li>
						<img style={{ width: '22px' }} src={reactIcon} />
						<span>ReactJS</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={mongodb} />
						<span>MongoDB</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={nodejsIcon} />
						<span>Node.js</span>
					</li>
				</ul>
			</div>
			<div class="skills-card">
				<div class="title">Technologies I work with</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={mongodb} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={reactIcon} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={cssIcon} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={nodejsIcon} />
					</li>
				</ul>
			</div>
			<div class="skills-card">
				<div class="title">Technologies I work with</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={mongodb} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={reactIcon} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={cssIcon} />
					</li>
					<li>
						<img style={{ width: '22px' }} src={nodejsIcon} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
