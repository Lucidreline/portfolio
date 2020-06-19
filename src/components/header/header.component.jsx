import React from 'react';

import './header.styles.scss';

// smooth scroll
import jump from 'jump.js';

const handleClick = e => {
  const section = document.getElementById(e.target.name);
  jump(section, {
    offset: -90,
    duration: 1500,
  });
};

const Header = () => {
  return (
    <nav id='nav-bar'>
      <div className='logo-container'>
        <h1 className='logo'>M</h1>
      </div>
      <div className='links-container'>
        <button
          onClick={handleClick}
          name='about-me'
          className='header-btn clickable-color color-hover'
        >
          About
        </button>
        <button
          onClick={handleClick}
          name='projects'
          className='header-btn clickable-color color-hover'
        >
          Projects
        </button>
        <button
          onClick={handleClick}
          name='contact'
          className='header-btn clickable-color color-hover'
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Header;
