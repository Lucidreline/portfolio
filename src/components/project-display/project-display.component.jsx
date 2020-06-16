import React from 'react';

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
      <h1>{name}</h1>
      <a
        className='clickable-color color-hover'
        rel='noopener noreferrer'
        target='_blank'
        href={url}
      >
        <img src={photo} alt={`Screenshot of ${name}.`} />
      </a>
      <div className='descrription-container'>
        <p>{description}</p>
      </div>

      <span className='technologies'>{technologies}</span>

      <div className='links'>
        <a
          className='clickable-color color-always'
          rel='noopener noreferrer'
          target='_blank'
          href={github}
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          className='clickable-color color-always'
          rel='noopener noreferrer'
          target='_blank'
          href={url}
        >
          <i className='fas fa-external-link-alt'></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
