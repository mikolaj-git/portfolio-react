import React from 'react';
import './app.scss';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import HeroImage from './components/heroImage/HeroImage.js';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
	return (
		<Router>
			<div className='app'>
				<ScrollToTop />
				<HeroImage />
				<Header />
				<Main />
				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
