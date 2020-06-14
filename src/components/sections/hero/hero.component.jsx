import React from 'react';

import './hero.styles.scss';

// components
import SideLinks from '../../side-links/side-links.component';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='content'>
        <span>Hi, my name is</span>
        <h1>Manuel Castaneda.</h1>
        <p>
          I am a web developer based in Los Angeles, CA. I develop and deploy
          full stack applications for the web.
        </p>
        <SideLinks />
      </div>
    </section>
  );
};
export default Hero;
