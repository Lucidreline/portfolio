import React from 'react';

// components
import Hero from '../../sections/hero/hero.component';
import AboutMe from '../../sections/about-me/about-me.component';
import Technologies from '../../sections/technologies/technologies.component';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Technologies />
    </div>
  );
};

export default LandingPage;
