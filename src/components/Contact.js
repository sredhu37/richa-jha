import React from 'react';
import { Linkedin, Facebook, Google } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className='Contact'>
      <a id="contact" />
      <h2>GET IN TOUCH!</h2>
      <hr />
      <div className='contactIcons'>
        <a href=''><Linkedin className='contactIcon' color="#EE4B28" size={50} /></a>
        <a href=''><Google className='contactIcon' color="#EE4B28" size={50} /></a>
        <a href=''><Facebook className='contactIcon' color="#EE4B28" size={50} /></a>
      </div>
    </div>
  );
}

export default Contact;