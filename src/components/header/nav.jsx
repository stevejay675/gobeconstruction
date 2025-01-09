'use client'

import React, { useState } from 'react';
import './header.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

        <div className="navbar-cta">
          <a href="#quote" className="btn-cta">Request a Quote</a>
        </div>
      </ul>

      {/* Hamburger menu to trigger sidebar */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <HiOutlineMenuAlt3 />
      </div>

      {/* Sidebar with a dynamic open state */}

      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    </nav>
  );
};

export default Navbar;
