import React from 'react';
import '../styles/About.css';

const About = () => {
	return (
		<div className="About">
			<div className="about-intro">
				Hi, I'm <span className="name-span">Jeremiah Quill</span>, a front-end web developer.
			</div>
			<br />
			<div>
				I like to build web apps. I focus on clean code, simple design, and a clear and intiutive user
				experience.
			</div>
		</div>
	);
};

export default About;
