import React from 'react';
import mongodbIcon from '../images/mongodb-icon.svg';
import reactIcon from '../images/react-icon.svg';
import cssIcon from '../images/css-icon.svg';
import nodejsIcon from '../images/nodejs-icon.svg';
import html5Icon from '../images/html5-icon.svg';
import javascriptIcon from '../images/javascript-icon.svg';
import bootstrapIcon from '../images/bootstrap-icon.svg';
import materialuiIcon from '../images/materialui-icon.svg';
import '../styles/Experience.css';

const Experience = () => {
	return (
		<div className="Experience">
			<div class="skills-card" style={{ backgroundColor: '#978562' }}>
				<div class="title">Front-end</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={html5Icon} alt="html5-icon" />
						<span>HTML</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={cssIcon} alt="css-icon" />
						<span>CSS</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={javascriptIcon} alt="javascript-icon" />
						<span>Javascript</span>
					</li>

					<li>
						<img style={{ width: '22px' }} src={reactIcon} alt="reactjs-icon" />
						<span>ReactJS</span>
					</li>
				</ul>
			</div>
			<div class="skills-card" style={{ backgroundColor: '#978562' }}>
				<div class="title">Back-end</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={nodejsIcon} alt="nodejs-icon" />
						<span>Node.js</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={mongodbIcon} alt="mongodb-icon" />
						<span>MongoDB</span>
					</li>
				</ul>
			</div>
			<div class="skills-card" style={{ backgroundColor: '#978562' }}>
				<div class="title">CSS Frameworks</div>
				<ul class="skills">
					<li>
						<img style={{ width: '22px' }} src={bootstrapIcon} alt="bootstrap-icon" />
						<span>Bootstrap</span>
					</li>
					<li>
						<img style={{ width: '22px' }} src={materialuiIcon} alt="materialui-icon" />
						<span>Material-UI</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
