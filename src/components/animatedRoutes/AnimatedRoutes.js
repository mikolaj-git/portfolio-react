import Aboutme from '../main/sections/aboutme/Aboutme.js';
import Home from '../main/sections/home/Home.js';
import Projects from '../main/sections/projects/Projects.js';
import Technologies from '../main/sections/technologies/Technologies.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({}) {
	const location = useLocation();

	return (
		<AnimatePresence key={location.pathname}>
			<Routes location={location}>
				<Route path='/' element={<Home />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/Aboutme' element={<Aboutme />} />
				<Route path='/Projects' element={<Projects />} />
				<Route path='/Technologies' element={<Technologies />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
