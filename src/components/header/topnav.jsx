import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './header.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <span title='call now'><FaPhoneAlt /> +237678827843</span>
        <span title='Email us'><FaEnvelope /> gobehroland084@gmail.com</span>
      </div>
      <div className="top-nav-right">
        <span><FaEnvelope /> +237678827843</span>
        <a href="https://www.facebook.com/profile.php?id=100069844161030" target='_blank'><FaFacebookF /></a>
        <a href="https://api.whatsapp.com/send/?phone=%2B237678827843&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsapp /> </a>
        <a href="instagram.com" target='_blank'><FaInstagram /></a>
      </div>
    </div>
  );
};

export default TopNav;
