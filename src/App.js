import React from 'react';
import Portfolio from './components/Portfolio';
import { FocusProvider } from './contexts/FocusContext';
import './App.css';

function App() {
	return (
		<div className="App">
			<FocusProvider>
				<Portfolio />
			</FocusProvider>
		</div>
	);
}

export default App;
