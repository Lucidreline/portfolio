import React from 'react'

import './contact.styles.scss'

const Contact = () => {
	return (
		<section id='contact'>
			<div className='content'>
				<h2 className='section-title'>Let's get in touch?</h2>
				<p className='marg-bottom'>
					Have a problem that needs to be solved? Just want to chat? Feel free
					to contact me!
				</p>
				<p>
					Email:{' '}
					<a
						className='clickable-color color-always'
						href='mailto:casta.ma502@gmail.com'
					>
						casta.ma502@gmail.com
					</a>
				</p>
				<p className='marg-bottom'>Discord: Lucidreline#2475</p>
				<p>I will get back to you as soon as I can.</p>
			</div>
		</section>
	)
}

export default Contact
