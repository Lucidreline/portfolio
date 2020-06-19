import React from 'react';

import './side-links.styles.scss';

const SideLinks = () => {
  return (
    <div id='side-links'>
      <ul>
        <li>
          <a
            href='https://github.com/lucidreline'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github clickable-color color-hover'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/manuel-castaneda-bb588b17b/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin clickable-color color-hover'></i>
          </a>
        </li>
        <li>
          <a
            href='mailto:mcas@manuelc.me'
          >
            <i className="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href='https://nc.manuelc.me/index.php/s/PJNNcRw56j6XBfw'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='far fa-file clickable-color color-hover'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideLinks;
