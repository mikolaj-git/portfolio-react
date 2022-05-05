import React from 'react'
import { Link } from 'react-router-dom';

const Links = ({ className, handleClick }) => {
	return (
		<>
			<li className={`${className}`}>
				<Link to='/Aboutme'>about me</Link>
			</li>
			<li className={`${className}`}>
				<Link to='/Projects'>projects</Link>
			</li>
			<li className={`${className}`}>
				<Link to='/Technologies'>technologies</Link>
			</li>
			<li className={`${className}`}>
				<a href='#contact' onClick={handleClick}>
					contact
				</a>
			</li>
		</>
	);
};

export default Links;
