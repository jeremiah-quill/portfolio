import React from 'react';
import portfolio from './images/portfolio.png'; // done
import jeopardy from './images/jeopardy-training.png'; // done
import blackjack from './images/blackjack.png'; //done
import recipeRundown from './images/recipe-rundown.png'; //done
import spotifyPlaylists from './images/spotify-playlists.png'; //done
import linkedinIcon from './images/linkedin-icon.svg'; //done
import githubIcon from './images/github-icon.svg'; //done
import codepenIcon from './images/codepen-icon.svg'; //done
import About from './components/About';
import Experience from './components/Experience';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';

import mongodbIcon from './images/mongodb-icon.svg';
import reactIcon from './images/react-icon.svg';
import cssIcon from './images/css-icon.svg';
import nodejsIcon from './images/nodejs-icon.svg';
import html5Icon from './images/html5-icon.svg';
import javascriptIcon from './images/javascript-icon.svg';
import bootstrapIcon from './images/bootstrap-icon.svg';
import materialuiIcon from './images/materialui-icon.svg';

const links = [
	{ name: 'LinkedIn', image: linkedinIcon, url: 'https://www.linkedin.com/in/jeremiah-quill-281b06122' },
	{ name: 'Github', image: githubIcon, url: 'https://github.com/jeremiah-quill' },
	{ name: 'Codepen', image: codepenIcon, url: 'https://codepen.io/jcq5010' }
];
const projects = [
	{
		title: 'Spotify Playlists',
		image: spotifyPlaylists,
		liveURL: 'https://jeremiah-quill.github.io/spotify-playlists/',
		codeURL: 'https://github.com/jeremiah-quill/spotify-playlists',
		description: 'A spotify web app for curating random playlists on the fly using the Spotify API.',
		icons: [
			{ image: javascriptIcon, alt: 'javascript' },
			{ image: reactIcon, alt: 'reactjs' },
			{ image: materialuiIcon, alt: 'material-ui' }
		]
	},
	{
		title: 'Recipe Rundown',
		image: recipeRundown,
		liveURL: 'http://www.reciperundown.com',
		codeURL: 'https://github.com/jeremiah-quill/recipe-rundown',
		description: 'A full-stack CRUD web app for managing and discovering recipes.',
		icons: [
			{ image: javascriptIcon, alt: 'javascript' },
			{ image: mongodbIcon, alt: 'mongodb' },
			{ image: nodejsIcon, alt: 'nodejs' },
			{ image: bootstrapIcon, alt: 'bootstrap' }
		]
	},
	{
		title: 'Blackjack',
		image: blackjack,
		liveURL: 'https://jeremiah-quill.github.io/Vanilla-JS-Blackjack/',
		codeURL: 'https://github.com/jeremiah-quill/Vanilla-JS-Blackjack',
		description: 'Vanilla javascript blackjack game.',
		icons: [ { image: javascriptIcon, alt: 'javascript' } ]
	},
	{
		title: 'Jeopardy',
		image: jeopardy,
		liveURL: 'http://www.jeopardytraining.xyz/?from=@',
		codeURL: 'https://github.com/jeremiah-quill/jeopardy',
		description: 'Vanilla javascript jeopardy training which makes use of a free Jeopardy API.',
		icons: [ { image: javascriptIcon, alt: 'javascript' } ]
	},
	{
		title: 'Portfolio',
		image: portfolio,
		liveURL: '#',
		codeURL: '#',
		description:
			'A responsive personal web development portfolio made with create-react-app.  My first experience with react-transitions-group library.',
		icons: [ { image: javascriptIcon, alt: 'javascript' }, { image: reactIcon, alt: 'reactjs' } ]
	}
];

const sectionsData = [
	{
		collapsed: false,
		focused: false,
		id: 1,
		key: 1,
		content: <About />,
		title: 'About',
		backgroundColor: '#009BDE'
	},
	{
		collapsed: false,
		focused: false,
		id: 2,
		key: 2,
		content: <Experience />,
		title: 'Skills',
		backgroundColor: '#EDDEA4'
	},
	{
		collapsed: false,
		focused: false,
		id: 3,
		key: 3,
		content: <ProjectList projects={projects} />,
		title: 'Projects',
		backgroundColor: '#F7A072'
	},
	{
		collapsed: false,
		focused: false,
		id: 4,
		key: 4,
		content: <Contact />,
		title: 'Contact',
		backgroundColor: '#D9E5D6'
	}
];

export { links, projects, sectionsData };
