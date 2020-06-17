import React from 'react';

import './project-display.styles.scss';

const ProjectDisplay = ({
  name,
  url,
  github,
  photo,
  technologies,
  description,
}) => {
  return (
    <div className='project-display'>
      <a
        className='image-anchor clickable-color color-hover'
        rel='noopener noreferrer'
        target='_blank'
        href={url}
      >
        <div
          className='photo'
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </a>
      <div className='content'>
        <h1>{name}</h1>

        <div className='description-container'>
          <p>{description}</p>
        </div>

        <span className='technologies'>{technologies}</span>

        <div className='links'>
          <a
            className='clickable-color color-hover'
            rel='noopener noreferrer'
            target='_blank'
            href={github}
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            className='clickable-color color-hover'
            rel='noopener noreferrer'
            target='_blank'
            href={url}
          >
            <i className='fas fa-external-link-alt'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
