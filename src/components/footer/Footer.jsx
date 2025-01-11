import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <h2 className='sub-header'>our company</h2>
          <p>Delivering excellence for over a decade.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3 className='sub-header'>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=%2B237678827843&text&type=phone_number&app_absent=0">whatsapp Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
  <h3 className="sub-header">Contact Us</h3>
  <ul>
    <li><a href="mailto:info@example.com">gobehroland084@gmail.com</a></li>
    <li><a href="tel:+1234567890">+237678827843</a></li>
    <li>Opposite Molyko stadium</li>
    <li>Working Hours: 9 AM - 5 PM</li>
  </ul>
</div>


        {/* Social Media */}
        <div className="footer-social">
          <h3 className='sub-header'>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100069844161030" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B237678827843&text&type=phone_number&app_absent=0" aria-label="whatsapp"><FaWhatsapp /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gobe Construction. All rights reserved. Website Created by <a href="https://portfolio-nine-alpha-39.vercel.app/" target='_blank'>Steve Jones</a></p>
      </div>
    </footer>
  );
};

export default Footer;
