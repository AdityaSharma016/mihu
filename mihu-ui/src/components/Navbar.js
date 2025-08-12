import React, { useState, useEffect } from 'react';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo-img">
          <img src="/assets/logo.png" alt="Mihu Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>  
      </div>
    </nav>
  );}
export default Navbar;
