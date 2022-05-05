import React from 'react';
import aboutme from './aboutme.scss';
import profile from '../../../../assets/images/profile.jpg';
import Button from '../../../button/Button.js';
import cv from '../../../../assets/files/cv.pdf';
import { motion } from 'framer-motion';

import {
	AiFillLinkedin,
	AiFillGithub,
	AiOutlineDownload,
} from 'react-icons/ai';
import { MdDownloadForOffline } from 'react-icons/md';

const Aboutme = () => {
	return (
		<motion.section
			className='section'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<div className='subject__wrapper'>
				<h1 className='subject__wrapper-title'>about me</h1>
				<p className='subject__wrapper-text'>
					a little about this, a little about that...
				</p>
			</div>
			<div className='aboutme'>
				<p className='aboutme-text'>
					<img src={profile} alt='profile' className='aboutme-profile' />
					Hi, I'm Mikołaj Buczek and I live in Warsaw. It has been a year since
					I started my adventure with coding. After creating my first website, I
					wanted to become a front-end developer. I enjoy working on the
					computer and I have a lot of fun with learning and the creation
					process of web apps. I am highly motivated and focused on development
					in the IT industry. Currently I work at Diebold Nixdorf in the
					Help-Desk department. My duties include remotely solving problems
					related to the operation of applications, systems and devices.
					Currently In order to develop my skills I'm looking for a new job as
					front-end developer.
				</p>
				<div className='aboutme__buttons'>
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
						className='download'
						link={
							<a href={cv} download title="Curriculum Vitae">
								<MdDownloadForOffline />
							</a>
						}
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default Aboutme;
