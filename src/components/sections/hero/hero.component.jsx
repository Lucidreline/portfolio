import React from 'react'

import './hero.styles.scss'

// components

const Hero = () => {
	return (
		<section id='hero'>
			<div className='content'>
				<div className='name-and-intro'>
					<h1 className='name'>Manuel Castaneda</h1>
				</div>
				<p className='title'>Full Stack Web Developer</p>
				<p className='location'>
					<a
						className='clickable-color color-always'
						target='_blank'
						rel='noopener noreferrer'
						href='https://duckduckgo.com/?q=Gardena%2C+CA%2C+United+States&t=canonical&atb=v1-1&ia=maps&iaxm=maps&strict_bbox=0&bbox=34.05102565853552%2C-118.4237487963867%2C33.784356615281624%2C-118.24419099609374&metatoken=0'
					>
						<i className='fas fa-map-marker-alt'></i>{' '}
						<span className='location-name clickable-color color-hover'>
							Gardena, CA
						</span>
					</a>
				</p>
			</div>
		</section>
	)
}
export default Hero
