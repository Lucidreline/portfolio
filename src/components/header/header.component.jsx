import React from 'react';

import './header.styles.scss';

const Header = () => {
  return (
    <nav id='nav-bar'>
      <div className='logo-container'>
        <h1 className='logo'>M</h1>
      </div>
      <div className='links-container'>
        <a className='clickable-color color-hover' href='#about-me'>
          About
        </a>
        <a className='clickable-color color-hover' href='#projects'>
          Projects
        </a>
        <a className='clickable-color color-hover' href='#contact'>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
