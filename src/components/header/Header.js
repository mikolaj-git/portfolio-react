import { useState } from 'react';
import header from './header.scss';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../button/Button.js';
import Links from '../links/Links.js';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(true);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	};

	const closeMobileMenu = () => setToggleMenu(true);

	let scroll1 = window.pageYOffset;

	window.onscroll = function () {
		let scroll2 = window.pageYOffset;

		if (scroll1 > scroll2) {
			document.querySelector('header').style.top = '0';
		} else {
			document.querySelector('header').style.top = '-150px';
			closeMobileMenu()
		}
		scroll1 = scroll2;
	};

	return (
		<header className='header'>
			<nav className='navbar'>
				<Button
					className={`navbar__button`}
					handleClick={handleToggle}
					icon={toggleMenu ? <FiAlignJustify /> : <FiX />}
				/>
				<ul className='navbar__menu'>
					<Links className={`navbar__link`} handleClick={closeMobileMenu} />
				</ul>
				<ul
					className={`navbar__mobile-menu ${toggleMenu ? '' : 'toggleMenu'}`}
					onClick={closeMobileMenu}
				>
					<Links className={`navbar__link`} handleClick={closeMobileMenu} />
				</ul>
				<Button
					className={`navbar__button`}
					link={
						<Link to='/home' onClick={closeMobileMenu}>
							<AiOutlineHome />
						</Link>
					}
				/>
			</nav>
		</header>
	);
};

export default Header;
