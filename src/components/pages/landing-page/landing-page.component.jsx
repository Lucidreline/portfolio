import React from 'react';

// components
import Hero from '../../sections/hero/hero.component';
import AboutMe from '../../sections/about-me/about-me.component';
import Technologies from '../../sections/technologies/technologies.component';
import Projects from '../../sections/projects/projects.component';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
};

export default LandingPage;
