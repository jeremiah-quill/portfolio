import React, { useState, createContext } from 'react';

export const FocusContext = createContext();

export function FocusProvider(props) {
	const [ focused, setFocused ] = useState('');
	const changeFocus = (title) => {
		setFocused(title);
	};

	return <FocusContext.Provider value={{ focused, changeFocus }}>{props.children}</FocusContext.Provider>;
}
