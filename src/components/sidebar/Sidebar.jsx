import React from 'react';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaUserGraduate, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-logo">Gobe Construction</h3>
      </div>

      <div className="close-sidebar" onClick={toggleSidebar}><FaTimes className='close-icon'/></div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaInfoCircle /> About</a></li>
          <li><a href="#services"><FaUserGraduate /> Services</a></li>
          <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
          <li><a href="#contact"><FaEnvelope /> Contact</a></li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()} Gobe Construction</p>
      </div>
    </div>
  );
};

export default Sidebar;
