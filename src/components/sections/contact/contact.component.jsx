import React from 'react';

import './contact.styles.scss';

import handleSubmit from './handleSubmit.utils';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='content'>
        <h1>Let's get in touch?</h1>
        <p>
          Use the form below to send me an email. I will respond as soon as I
          can.
        </p>
        <form onSubmit={handleSubmit}>
          <input placeholder='Email' type='email' name='email' />
          <input placeholder='Subject' type='text' name='subject' />
          <textarea name='message' placeholder='Message'></textarea>
        </form>
        <i className='far fa-paper-plane'></i>
      </div>
    </section>
  );
};

export default Contact;
