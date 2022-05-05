import React from 'react';

const Button = ({ text, link, icon, className, handleClick, type, value }) => {
	return (
		<button
			className={`${className}`}
			onClick={handleClick}
			type={`${type}`}
			value={`${value}`}
		>
			{text}
			{link}
			{icon}
		</button>
	);
};

export default Button;
