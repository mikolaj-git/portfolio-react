import React from 'react';
import footer from './footer.scss';
import Button from '../button/Button.js';
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillPhone,
	AiOutlineMail,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__container-icons'>
					<Button
						className='linked'
						link={
							<a
								href='https://www.linkedin.com/in/mikolaj-buczek-3b2013156/'
								target='_blank'
								rel='noreferrer'
							>
								<AiFillLinkedin />
							</a>
						}
					/>
					<Button
						className='github'
						link={
							<a
								href='https://github.com/mikolaj-git'
								target='_blank'
								rel='noreferrer'
							>
								<AiFillGithub />
							</a>
						}
					/>

					<Button
						className='phone'
						link={
							<a href='tel:697323044'>
								<AiFillPhone />
							</a>
						}
					/>
					<Button
						className='email'
						link={
							<a href='mailto:mikolaj.a.b@gmail.com'>
								<AiOutlineMail />
							</a>
						}
					/>
				</div>
			</div>
			<div className='footer__info'>
				<p className='footer__info-text'>
					&copy; 2022 mikołaj buczek - portfolio
				</p>
			</div>
		</footer>
	);
};

export default Footer;
