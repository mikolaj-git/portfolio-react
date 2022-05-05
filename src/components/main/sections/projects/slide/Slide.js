import slide from './slide.scss';
import { AiFillGithub } from 'react-icons/ai';
import Button from '../../../../button/Button.js';

const Slide = ({ image, description }) => {
	return (
		<div className={`slide ${image}`}>
			<div className='slide__infobox'>
				<div className='slide__infobox-text'>
					<p>
						{description}
						
					</p>
				</div>

				<div className='slide__infobox-buttons'>
					<Button
						className='slide__infobox-buttons-btn-github'
						link={
							<a
								href='https://github.com/mikolaj-git/Form-Validator'
								target='_blank'
								rel='noreferrer'
							>
								{<AiFillGithub />}
							</a>
						}
					/>

					<Button
						className='slide__infobox-buttons-btn-live'
						link={
							<a
								href='https://mikolaj-git.github.io/Form-Validator/'
								target='_blank'
								rel='noreferrer'
							>
								live
							</a>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Slide;
