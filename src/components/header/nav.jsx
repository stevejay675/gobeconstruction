'use client'

import React, { useState, useEffect } from 'react';
import './header.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from '../sidebar/Sidebar';
import Link from 'next/link';

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
      <Link href='/' className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </Link>

      <ul className="navbar-links">
        <li className={` ${isActive("/") ? "active" : ""}`}><Link href="/">Home</Link></li>
        <li className={` ${isActive("/about") ? "active" : ""}`}><Link href="/about">About Us</Link></li>
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#projects">Projects</a></li> */}
        <li className={` ${isActive("/contact") ? "active" : ""}`}><Link href="/contact">Contact</Link></li>

        <div className="navbar-cta">
          <Link href="/contact" className="btn-cta">Send Message</Link>
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
