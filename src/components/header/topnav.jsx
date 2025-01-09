import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './header.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <span><FaPhoneAlt /> +23767583773</span>
        <span><FaEnvelope /> info@companyname.com</span>
      </div>
      <div className="top-nav-right">
        <span><FaEnvelope /> +123-456-7890</span>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default TopNav;
