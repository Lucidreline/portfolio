import React from 'react';

const TechnologyDisplay = ({ name, icon, technologies }) => {
  return (
    <div>
      <i className={`fas fa-${icon}`}></i>
      <h3>{name}</h3>
      {technologies.map((techs, index) => (
        <p key={index}>{techs}</p>
      ))}
    </div>
  );
};

export default TechnologyDisplay;
