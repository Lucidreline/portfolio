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
        <h1>Featured Projects</h1>
        {this.state.projects.map((project, index) => (
          <ProjectDisplay key={index} {...project} />
        ))}
      </section>
    );
  }
}

export default Projects;
