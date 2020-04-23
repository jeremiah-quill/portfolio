import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/MainSection.css';

const MainSection = ({ backgroundColor, title, content, grow, collapsed, focused, id }) => {
	return (
		<div
			onClick={() => grow(id)}
			style={{ backgroundColor: `${backgroundColor}` }}
			className={`MainSection ${collapsed && 'collapse'} ${focused && 'focus'} `}
		>
			{!focused && (
				<div className={`section-title ${focused && 'focus'} ${collapsed && 'collapse'}`}>{title}</div>
			)}
			<CSSTransition in={focused} classNames="section" unmountOnExit timeout={0}>
				<div className="content">{content}</div>
			</CSSTransition>
		</div>
	);
};

export default MainSection;
