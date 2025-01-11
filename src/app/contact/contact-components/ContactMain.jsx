import React from 'react';
import "./contactComp.css";
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";
import ContactForm from '@/components/contact/Contact';

const ContactMain = () => {
  return (
    <div className='contact-main'>
      <div className="left-cm">
        <h2>Quick Contact</h2>
        <div>
          <a href="mailto:gobehroland084@gmail.com">
            <FaEnvelope className='contact-icons' /> gobehroland084@gmail.com
          </a>
          <a href="tel:+237678827843">
            <FaPhone className='contact-icons' /> +237678827843
          </a>
          <a href="sms:+237678827843">
            <FaPhone className='contact-icons' /> Send an SMS
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='contact-icons' /> contact on facebook
          </a>
          <a href="https://goo.gl/maps/gobeh_constructions" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className='contact-icons' /> opposite molyko stadium, Buea
          </a>
        </div>
      </div>

      <div className="right-cm"><ContactForm /></div>
    </div>
  );
};

export default ContactMain;
