import React from 'react';
import MainSection from './MainSection';
import Linkbar from './Linkbar';
import DesignedBy from './DesignedBy';
import { useState } from 'react';
import { links, projects, sectionsData } from '../portfolio-data';
// import About from './About';
// import Experience from './Experience';
// import ProjectList from './ProjectList';
// import Contact from './Contact';
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
			{<DesignedBy />}

			{<Linkbar links={links} />}
		</div>
	);
};

export default Portfolio;

// 	<Switch>
// 	<Route exact path="/" render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors} />} />
// 	{sections.map(section => (
// 		<Route 		exact
// 		path="/:title"
// 		render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
// 	))}
// 	<Route
// 		exact
// 		path="/:title"
// 		render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
// 	/>
// 	<Route
// 		exact
// 		path="/palette/:paletteId/:colorId"
// 		render={(routeProps) => (
// 			<SingleColorPalette
// 				colorId={routeProps.match.params.colorId}
// 				palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
// 			/>
// 		)}
// 	/>
// </Switch>;
