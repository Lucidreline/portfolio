import React from 'react'

import './contact.styles.scss'

const Contact = () => {
	return (
		<section id='contact'>
			<div className='content'>
				<h2 className='section-title'>Get in touch with me</h2>
				<p className='marg-bottom'>
					Have a problem that needs to be solved? Just want to chat? Feel free
					to contact me!
				</p>
				<p>
					<i className='contact-icons far fa-envelope'></i>
					<a
						className='clickable-color color-hover'
						href='mailto:casta.ma502@gmail.com'
					>
						Casta.ma502@gmail.com
					</a>
				</p>
				<p className='marg-bottom'>
					<i className='fab fa-discord contact-icons'></i>Lucidreline#2475
				</p>
				<p>I will get back to you as soon as I can.</p>
			</div>
		</section>
	)
}

export default Contact
