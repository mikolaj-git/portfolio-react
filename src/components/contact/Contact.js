import React, { useRef, useState } from 'react';
import contact from './contact.scss';
import emailjs from '@emailjs/browser';
import Button from '../button/Button.js';

const Contact = () => {

	const reveal = () => {
		let reveals = document.querySelectorAll('.reveal');

		for (let i = 0; i < reveals.length; i++) {
			let windowheight = window.innerHeight;
			let revealtop = reveals[i].getBoundingClientRect().top;
			let revealpoint = 50;

			if (revealtop < windowheight - revealpoint) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	};

	window.addEventListener('scroll', reveal);

	const [error, setError] = useState(null);
	const [values, setValues] = useState({
		user_name: '',
		user_email: '',
		user_message: '',
	});

	const handleButton = () => {
		const btn = document.querySelector('.contact__form-button ');
		btn.textContent = `message sent !`;
		btn.disabled = true;
		btn.classList.add('sendBtn');
		setTimeout(() => {
			btn.textContent = `send`;
			btn.disabled = false;
			btn.classList.remove('sendBtn');
		}, 3000);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const validate = (values) => {
		if (!values.user_name) {
			return 'Enter your name';
		} else if (values.user_name.length < 3) {
			return 'Name must be longer';
		}

		if (!values.user_email) {
			return 'Enter your email adress';
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.user_email)) {
			return 'Invalid email format';
		}

		if (!values.user_message) {
			return 'Enter your message';
		}

		return null;
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const errorMsg = validate(values);
		if (errorMsg) {
			setError(errorMsg);
		} else {
			setError();
			setValues({
				user_name: '',
				user_email: '',
				user_message: '',
			});
			handleButton();

			emailjs
				.sendForm(
					'service_awng7ff',
					'template_c0udgka',
					form.current,
					'9aBJcMW9zkb9XBWR9'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<section className='contact ' id='contact'>
	
			<div className='subject__wrapper'>
				<h1 className='subject__wrapper-title reveal'>#contact</h1>
				<p className='subject__wrapper-text reveal'>
					If you have any questions, feel free to contact me in any way
					available below:
				</p>
			</div>
			<form ref={form} onSubmit={sendEmail} className='contact__form'>
				<div className='contact__form-name reveal'>
					<label>name:</label>
					<input
						type='text'
						name='user_name'
						value={values.user_name}
						onChange={handleChange}
					/>
				</div>
				<div className='contact__form-email reveal'>
					<label>email:</label>
					<input
						type='email'
						name='user_email'
						value={values.user_email}
						onChange={handleChange}
					/>
				</div>
				<div className='contact__form-message reveal'>
					<label>message:</label>
					<textarea
						type='message'
						name='user_message'
						value={values.user_message}
						onChange={handleChange}
					/>
				</div>
				<span className={`error-message ${error ? 'visible' : ''}`}>
					{error}
				</span>
				<Button
					className={`contact__form-button reveal`}
					type='submit'
					value='send'
					text={'send'}
				/>
			</form>
		</section>
	);
};

export default Contact;
