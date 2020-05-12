import React from 'react';
import MainSection from './MainSection';
import Linkbar from './Linkbar';
import DesignedBy from './DesignedBy';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useState, useContext } from 'react';
import { links, projects, sectionsData } from '../portfolio-data';
import About from './About';
import Experience from './Experience';
import ProjectList from './ProjectList';
import Contact from './Contact';
import { FocusContext } from '../contexts/FocusContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../styles/Portfolio.css';

const Portfolio = () => {
	const { focused } = useContext(FocusContext);
	const [ sections ] = useState(sectionsData);

	return (
		<div className="Portfolio">
			<SwitchTransition>
				<CSSTransition key={focused} classNames={'slide'} timeout={600}>
					<div className="main-title">{focused}</div>
				</CSSTransition>
			</SwitchTransition>

			{sections.map((section, i) => (
				<MainSection
					key={section.key}
					id={section.id}
					// grow={grow}
					collapsed={focused !== '' && focused !== section.title}
					focused={focused === section.title}
					content={section.content}
					title={section.title}
					backgroundColor={section.backgroundColor}
				/>
			))}

			{<DesignedBy />}

			{<Linkbar links={links} />}
		</div>
	);
};

export default Portfolio;
