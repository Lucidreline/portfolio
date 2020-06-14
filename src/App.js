import React from 'react';

import './App.css';

// material ui

// components

// components
import Header from './components/header/header.component';
import Hero from './components/sections/hero/hero.component';
import AboutMe from './components/sections/about-me/about-me.component';
import Projects from './components/sections/projects/projects.component';
import Contact from './components/sections/contact/contact.component';

function App() {
  return (
    <div className='App'>
      <div id='margin-container'>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
