import React from 'react';

import './contact.styles.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='content'>
        <h2 className='section-title'>Let's get in touch?</h2>
        <p>
          Have a problem that needs to be solved? Feel free to contact me through my email <a className='clickable-color color-always' href="mailto:mcas@manuelc.me">mcas@manuelc.me</a>.
        </p>
        <p>
          I will respond as soon as I
          can.
        </p>

      </div>
    </section>
  );
};

export default Contact;
