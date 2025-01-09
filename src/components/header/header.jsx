import React from 'react';
import TopNav from './topnav';
import Navbar from './nav';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <TopNav />
      <Navbar />
    </header>
  );
};

export default Header;
