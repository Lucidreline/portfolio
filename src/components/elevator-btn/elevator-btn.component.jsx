import React from 'react';

import './elevator-btn.styles.scss';

import Elevator from 'elevator.js';

const elevator = new Elevator({
  mainAudio:
    'https://res.cloudinary.com/dglxjd018/video/upload/v1593667947/Portfolio/audio/elevator_dfipnm.mp3',
  endAudio:
    'https://res.cloudinary.com/dglxjd018/video/upload/v1593668071/Portfolio/audio/ding_vw2i8r.mp3',
  duration: 5000,
});

const handleClick = () => {
  elevator.elevate();
};

const ElevatorBtn = () => {
  return (
    <div className='elevator-btn'>
      <button onClick={handleClick}>
        <div>
          <i className='fas fa-sort-up'></i>
        </div>
        <div>
          <p>Click To Scroll Up</p>
          <p>(THE FUN WAY!)</p>
        </div>
      </button>
    </div>
  );
};

export default ElevatorBtn;
