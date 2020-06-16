import React from 'react';

import './App.css';

// components
import Header from './components/header/header.component';
import Hero from './components/sections/hero/hero.component';
import AboutMe from './components/sections/about-me/about-me.component';
import Projects from './components/sections/projects/projects.component';
import Contact from './components/sections/contact/contact.component';

// animations
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className='App'>
      <div id='margin-container'>
        <Header />
        <Hero />
        <div data-aos='fade-up-right'>
          <AboutMe />
        </div>
        <div data-aos='fade-up-right'>
          <Projects />
        </div>
        <div data-aos='fade-up'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
