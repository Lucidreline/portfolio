import React from 'react';

import './about-me.styles.scss';

const AboutMe = () => {
  return (
    <section id='about-me'>
      <div className='content'>
        <h2 className='section-title'>About Me</h2>
        <div className='content'>
          <p className='marg-bottom'>
            I wrote my first line of code right after I graduated high school in
            2018 and immediately grew a passion for it. That lead me to become a
            computer science major at{' '}
            <a
              className='clickable-color color-always'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.csudh.edu/'
            >
              CSU Dominguez Hills
            </a>
            .
          </p>
          <p className='marg-bottom'>
            In the last couple of months of 2018, I began my web development
            journey. After seeing how I was able to build a beautiful user
            interface for my apps, it became impossible for me to ever leave web
            development.
          </p>
          <p className='marg-bottom'>
            Here are some technologies I have been playing with recently:
          </p>
          <ul className='technologies'>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.typescriptlang.org/'
              >
                TypeScript
              </a>
            </li>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://reactjs.org/'
              >
                React
              </a>
            </li>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://nodejs.org/en/about/'
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://expressjs.com/'
              >
                Express
              </a>
            </li>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.mongodb.com/'
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                className='clickable-color color-always'
                target='_blank'
                rel='noopener noreferrer'
                href='https://git-scm.com/'
              >
                Git
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
