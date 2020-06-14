import React from 'react';

function ProjectDisplay({
  name,
  url,
  github,
  photo,
  technologies,
  description,
}) {
  return (
    <div className='project-display'>
      <h1>{name}</h1>
      <a rel='noopener noreferrer' target='_blank' href={url}>
        <img src={photo} alt={`Screenshot of ${name}.`} />
      </a>
      <div className='descrription-container'>
        <p>{description}</p>
      </div>

      <span className='technologies'>{technologies}</span>

      <div className='links'>
        <a rel='noopener noreferrer' target='_blank' href={github}>
          <i class='fab fa-github'></i>
        </a>
        <a rel='noopener noreferrer' target='_blank' href={url}>
          <i class='fas fa-external-link-alt'></i>
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
