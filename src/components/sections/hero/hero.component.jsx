import React from 'react';

import './hero.styles.scss';

// components
import SideLinks from '../../side-links/side-links.component';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='content'>
        <span className='intro'>Hi, my name is</span>
        <h1 className='name'>Manuel Castaneda.</h1>
        <p className='bio'>
          I am a web developer based in{' '}
          <a
            className='clickable-color color-always'
            target='_blank'
            rel='noopener noreferrer'
            href='https://duckduckgo.com/?q=Gardena%2C+CA%2C+United+States&t=canonical&atb=v1-1&ia=maps&iaxm=maps&strict_bbox=0&bbox=34.05102565853552%2C-118.4237487963867%2C33.784356615281624%2C-118.24419099609374&metatoken=0'
          >
            Gardena, CA
          </a>
          . I have a passion for developing and deploying full stack
          applications for the web.
        </p>
        <SideLinks />
      </div>
    </section>
  );
};
export default Hero;
