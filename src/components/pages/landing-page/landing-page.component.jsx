import React from 'react';

// components
import SideLinks from '../../side-links/side-links.component';
import Header from '../../header/header.component';
import Hero from '../../sections/hero/hero.component';
import AboutMe from '../../sections/about-me/about-me.component';
import Projects from '../../sections/projects/projects.component';
import Contact from '../../sections/contact/contact.component';

const LandingPage = () => {
  return (
    <div>
      <SideLinks />
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default LandingPage;
