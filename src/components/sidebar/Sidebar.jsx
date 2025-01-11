'use client'

import React from 'react';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaUserGraduate, FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [currentPath, setCurrentPath] = useState("");

   useEffect(() => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    }, []);
  
    const isActive = (path) => currentPath === path;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <a href="/" className="sidebar-header">
        <img src="/images/logo.jpg" alt="" />
        Gobeh Constructions
      </a>

      {/* <div className="close-sidebar" onClick={toggleSidebar}><LiaTimesSolid className='close-icon'/></div> */}

      <nav className="sidebar-nav">
        <ul>
          <li onClick={toggleSidebar} className={` ${isActive("/") ? "active" : ""}`}><a href="/"><FaHome /> Home</a></li>
          <li onClick={toggleSidebar} className={` ${isActive("/about") ? "active" : ""}`}><a href="/about"><FaInfoCircle /> About Us</a></li>
          <li onClick={toggleSidebar} className={` ${isActive("/contact") ? "active" : ""}`}><a href="/contact"><FaEnvelope /> Contact</a></li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()} Gobeh Construction</p> created by <a href="https://portfolio-nine-alpha-39.vercel.app/">steve</a>
      </div>

    </div>
  );
};

export default Sidebar;
