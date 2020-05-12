import React, { useContext } from 'react';
import { FocusContext } from '../contexts/FocusContext';
import { CSSTransition } from 'react-transition-group';
import '../styles/MainSection.css';

const MainSection = ({ backgroundColor, title, content, grow, collapsed, focused, id }) => {
	const { changeFocus } = useContext(FocusContext);
	return (
		<div
			onClick={() => changeFocus(title)}
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
