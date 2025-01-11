import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
  } from "react-icons/fa";
  import "./contactComp.css"

const ContactSocials = () => {
  return (
    <div className="contact-socials">
      <h1>Our Socials</h1>
      <div>
        <a href="#">
          <FaInstagram className="contact-socials-icons" />
        </a>
        <a href="#">
          <FaFacebookF className="contact-socials-icons" />
        </a>
        <a href="#">
          <FaLinkedin className="contact-socials-icons" />
        </a>
        <a href="#">
          <FaWhatsapp className="contact-socials-icons" />
        </a>
      </div>
    </div>
  );
};

export default ContactSocials;
