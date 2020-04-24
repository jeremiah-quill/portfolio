import React from 'react';
import MainSection from './MainSection';
import Linkbar from './Linkbar';
import { useState } from 'react';
import { links, sectionsData } from '../portfolio-data';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../styles/Portfolio.css';

const Portfolio = () => {
	const [ isFocused, setIsFocused ] = useState({});
	const [ sections, setSections ] = useState(sectionsData);

	const grow = (id) => {
		const focusedTitle = sections.find((section) => section.id === id && section.title);
		const updatedSections = sections.map(
			(section) =>
				section.id === id
					? { ...section, collapsed: false, focused: true }
					: { ...section, collapsed: true, focused: false }
		);
		setSections(updatedSections);
		setIsFocused(focusedTitle);
	};

	return (
		<div className="Portfolio">
			<SwitchTransition>
				<CSSTransition key={isFocused.title} classNames={'slide'} timeout={600}>
					<div className="main-title">{isFocused.title}</div>
				</CSSTransition>
			</SwitchTransition>

			{sections.map((section, i) => (
				<MainSection
					key={section.key}
					id={section.id}
					grow={grow}
					collapsed={section.collapsed}
					focused={section.focused}
					content={section.content}
					title={section.title}
					backgroundColor={section.backgroundColor}
				/>
			))}
			{<Linkbar links={links} />}
		</div>
	);
};

export default Portfolio;
