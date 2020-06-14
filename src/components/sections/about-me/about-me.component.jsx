import React from 'react';

import './about-me.styles.scss';

const AboutMe = () => {
  return (
    <section id='about-me'>
      <div className='content'>
        <h1>A Little About Me</h1>
        <p>
          Hello! I am a Computer Science student based in Los Angeles, CA. I
          wrote my first line of code right after graduating high school in 2018
          and immediately grew a passion for it.
        </p>
        <p>
          I began my web development journey in late 2018. After seeing how I
          was able to build a beautiful user interface for my apps, it became
          impossible for me to leave web development.
        </p>
        <div>
          <p>I have been using these technologies recently:</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
