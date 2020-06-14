import React, { Component } from 'react';

// data
import { technologiesData } from './technologies.data';

// components
import TechnologiesDisplay from '../../technology-display/technology-display.component';

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.state = technologiesData;
  }

  render() {
    return (
      <section id='technologies'>
        {this.state.technologies.map((techs, index) => (
          <TechnologiesDisplay key={index} {...techs} />
        ))}
      </section>
    );
  }
}

export default Technologies;
