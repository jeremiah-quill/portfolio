import React from 'react';

const Linkbar = ({ links }) => {
	return (
		<div className="Linkbar cc">
			{links.map((link, i) => (
				<a key={i} className="Linkbar-link" href={link.url} target="_blank" rel="noopener noreferrer">
					<img style={{ width: '22px' }} src={link.image} alt={link.name} />
				</a>
			))}
		</div>
	);
};

export default Linkbar;
