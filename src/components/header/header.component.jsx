import React from 'react';

import './header.styles.scss';

const Header = () => {
  return (
    <nav id='nav-bar'>
      <div className='logo-container'>
        <h1 className='logo'>M</h1>
      </div>
      <div className='links-container'>
        <a href='#about-me'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  );
};

export default Header;
