import projects from './projects.scss';
import Slider from 'react-slick';
import Slide from './slide/Slide.js';
import { motion } from 'framer-motion';

const Projects = () => {
	const settings = {
		className: 'project__container',
		infinite: true,
		slidesToShow: 1,
		speed: 800,
		dots: false,
	};

	return (
		<motion.section
			className='section'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<div className='subject__wrapper'>
				<h1 className='subject__wrapper-title'>projects</h1>
				<p className='subject__wrapper-text'>
					projects that I have prepared to show what I have learned so far:
				</p>
			</div>
			<div className='project'>
				<Slider {...settings}>
					<Slide
						image='portfolio'
						description={`My porfolio website, you are here. Created wtih React, CSS/SCSS, JavaScript. `}
					/>
					<Slide
						image='form-validator'
						description={`Form Validator App, created wtih HTML, CSS/SCSS, JavaScript. I used Regex to validate email. Fill in the blanks to send the form.`}
					/>
					<Slide
						image='weather-app'
						description={`Weather APP, created with HTML, CSS/SCSS, JavaScript. You can type city name or postal code to check weather in any place in the world .`}
					/>
					<Slide
						image='old-portfolio'
						description={`My old portfolio page. I decided to create this page before learning React to consolidate my previous knowledge. Created for learning purpose only.`}
					/>

					<div className='project__container-soon'>
						<div className='project__container-soon-textbox'>
							<p>more projects commin soon!</p>
						</div>
					</div>
				</Slider>
			</div>
		</motion.section>
	);
};

export default Projects;
