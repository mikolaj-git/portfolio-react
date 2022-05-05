import React from 'react';
import Button from '../../../button/Button.js';
import { MdDoubleArrow } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import home from './home.scss';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<motion.section
			className='section'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<div className='home__container'>
				<h1 className='home__container-title-one'>Hello. I'm Mikołaj,</h1>
				<h2 className='home__container-title-two'>front-end developer</h2>
				<p className='home__container-text'>
					Check out my projects and contact with me!
				</p>
				<div className='home__container__buttons'>
					<Button
						className='home__container__buttons-aboutme'
						link={
							<Link to='/Aboutme'>
								about me
								<BsInfoCircle className='home__container__buttons-icon' />
							</Link>
						}
					/>
					<Button
						className='home__container__buttons-projects'
						link={
							<Link to='/Projects'>
								projects
								<MdDoubleArrow className='home__container__buttons-icon' />
							</Link>
						}
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default Home;
