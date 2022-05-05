import React from 'react';
import './heroimage.scss';
import video from '../../assets/videos/VI.mp4';

const HeroImage = () => {
	return (
		<div className='heroimage'>
			<video src={video} autoPlay loop muted />
		</div>
	);
};

export default HeroImage;
