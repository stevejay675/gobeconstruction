import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whats.css";

const Whats = () => {
  return (
    <div className="whats">
      <a
        href="https://api.whatsapp.com/send/?phone=%2B237678827843&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Whats;
