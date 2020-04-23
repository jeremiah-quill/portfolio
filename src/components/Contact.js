import React, { useState } from 'react';
import useInputState from '../hooks/useInputState';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../styles/Contact.css';

const Contact = () => {
	const [ isSent, setIsSent ] = useState(false);
	const [ isSending, setIsSending ] = useState(false);
	const { value: name, bind: bindName, reset: resetName } = useInputState('');
	const { value: email, bind: bindEmail, reset: resetEmail } = useInputState('');
	const { value: message, bind: bindMessage, reset: resetMessage } = useInputState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		const templateId = 'template_H7tdYdM4';
		setIsSending(true);
		sendFeedback(templateId, { message_html: message, from_name: name, reply_to: email });
	};

	const sendFeedback = (templateId, variables) => {
		window.emailjs
			.send('gmail', templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
				resetName('');
				resetEmail('');
				resetMessage('');
				setIsSent(true);
				setTimeout(() => {
					setIsSent(false);
				}, 1000);
				setIsSending(false);
			})
			// Handle errors here however you like, or use a React error boundary
			.catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
	};
	return (
		<div className="Contact">
			<h5>Want to get in touch?</h5>
			<br />

			<form className={`contact-form ${isSending && isSending}`} onSubmit={handleSubmit}>
				<input
					className="name-input"
					{...bindName}
					type="text"
					placeholder="Name"
					autocomplete="new-password"
				/>
				<input {...bindEmail} type="email" placeholder="Email" />
				<textarea {...bindMessage} placeholder="Message" autocomplete="new-password" />
				<CSSTransition in={isSent} classNames="sent-slide" timeout={1000}>
					<div className="sent">Message sent!</div>
				</CSSTransition>
				<button className="contact-submit-button">Submit</button>
			</form>
		</div>
	);
};

export default Contact;
