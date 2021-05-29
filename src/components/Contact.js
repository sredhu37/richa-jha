import React from 'react';
import { Linkedin, Facebook/*, Google*/ } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className='Contact'>
      <a id="contact" />
      <h2>GET IN TOUCH!</h2>
      <hr />
      <div className='contactIcons'>
        <a href='https://www.linkedin.com/in/richa-jha-b6550175/'><Linkedin className='contactIcon' color="#EE4B28" size={50} /></a>
        {/* <a href=''><Google className='contactIcon' color="#EE4B28" size={50} /></a> */}
        <a href='https://www.facebook.com/richa.jha.526'><Facebook className='contactIcon' color="#EE4B28" size={50} /></a>
      </div>
    </div>
  );
}

export default Contact;