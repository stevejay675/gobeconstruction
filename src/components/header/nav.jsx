'use client'

import React, { useState, useEffect } from 'react';
import './header.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (path) => currentPath === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <a href='/' className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </a>

      <ul className="navbar-links">
        <li className={` ${isActive("/") ? "active" : ""}`}><a href="/">Home</a></li>
        <li className={` ${isActive("/about") ? "active" : ""}`}><a href="/about">About Us</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#projects">Projects</a></li> */}
        <li className={` ${isActive("/contact") ? "active" : ""}`}><a href="/contact">Contact</a></li>

        <div className="navbar-cta">
          <a href="/contact" className="btn-cta">Send Message</a>
        </div>
      </ul>

      {/* Hamburger menu to trigger sidebar */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <HiOutlineMenuAlt3 />
      </div>

      {/* Sidebar with a dynamic open state */}

      {isSidebarOpen && (
        <div className="overlay" onClick={toggleSidebar}></div>
      )}


      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    </nav>
  );
};

export default Navbar;
