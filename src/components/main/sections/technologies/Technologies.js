import React from 'react';
import './technologies.scss';
import Image from './image/Image.js';
import css from '../../../../assets/images/css3.jpg';
import git from '../../../../assets/images/git.jpg';
import github from '../../../../assets/images/github.jpg';
import html from '../../../../assets/images/html5.jpg';
import js from '../../../../assets/images/js.jpg';
import reactRouter from '../../../../assets/images/react-router.jpg';
import react from '../../../../assets/images/react.jpg';
import rwd from '../../../../assets/images/rwd.jpg';
import sass from '../../../../assets/images/sass.jpg';
import vsc from '../../../../assets/images/vsc.jpg';
import { motion } from 'framer-motion';

const Technologies = () => {
	return (
		<motion.section
			className='section'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<div className='subject__wrapper'>
				<h1 className='subject__wrapper-title'>technologies</h1>
				<p className='subject__wrapper-text'>
					technologies that I learned during my adventure with coding:
				</p>
			</div>

			<div className='technologies__container'>
				<Image src={html} alt='html' text='html' />
				<Image src={css} alt='css' text='css' />
				<Image src={sass} alt='sass' text='sass' />
				<Image src={js} alt='JavaScript' text='java script' />
				<Image src={react} alt='React' text='react' />
				<Image src={reactRouter} alt='React Router' text='react router' />
				<Image src={git} alt='GIT' text='git' />
				<Image src={github} alt='GitHub' text='github' />
				<Image src={vsc} alt='Visual Studio Code' text='vsc' />
				<Image src={rwd} alt='Responsive Web Design' text='rwd' />
			</div>
		</motion.section>
	);
};

export default Technologies;
