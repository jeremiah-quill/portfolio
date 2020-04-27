import React from 'react';
import '../styles/About.css';

const About = () => {
	const handleClick = () => {
		// grow(4);
		console.log('clicked');
	};
	return (
		<div className="About">
			<div className="about-intro">
				Hi, I'm <span className="name-span">Jeremiah Quill</span>, a full-stack web developer.
			</div>
			<br />
			<div>
				I like to build web apps. I focus on clean code, simple design, and a clear and intiutive user
				experience. Let's build something together!
				{/* <button onClick={handleClick}>Contact me</button> */}
			</div>
		</div>
	);
};

export default About;
