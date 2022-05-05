import image from './image.scss';

const Image = ({ src, alt, text }) => {
	return (
		<div className='container'>
			<img src={src} alt={alt} className='container-img' />
			<p className='container-name'>{text}</p>
		</div>
	);
};

export default Image;
