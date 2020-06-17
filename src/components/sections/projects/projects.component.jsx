import React, { Component } from 'react';

import './projects.styles.scss';

// data
import ProjectsData from './projects.data';

// components
import ProjectDisplay from '../../project-display/project-display.component';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = ProjectsData;
  }

  render() {
    return (
      <section id='projects'>
        <div className='content'>
          <h1 className='title'>Featured Projects</h1>
          <div className='project-displays'>
            {this.state.projects.map((project, index) => (
              <ProjectDisplay key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
