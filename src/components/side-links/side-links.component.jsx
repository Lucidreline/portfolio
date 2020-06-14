import React from 'react';

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
            <i class='fab fa-github'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/manuel-castaneda-bb588b17b/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a
            href='https://nc.manuelc.me/index.php/s/PJNNcRw56j6XBfw'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='far fa-file'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideLinks;
