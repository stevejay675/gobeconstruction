import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <h2>Gobe Construction</h2>
          <p>Delivering excellence for over a decade.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Recent Projects</h3>
          <ul>
            <li><a href="#home">Project 1</a></li>
            <li><a href="#about">project 2</a></li>
            <li><a href="#services">project 3</a></li>
            <li><a href="#contact">project 4</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gobe Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
