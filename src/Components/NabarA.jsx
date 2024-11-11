import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NabarA.css";

function NavbarA() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rehab</div>
      {isOpen && (
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/membership" onClick={closeMenu}>
            Membership
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/signin" style={{color:'black'}} className="log" onClick={closeMenu}>
           <p> Sign In</p>
          </Link>
        </div>
      )}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link style={{color:'white'}} to="/home" onClick={closeMenu}>
          Messages
        </Link>
        <Link  style={{color:'white'}} to="/about" onClick={closeMenu}>
          Patients
        </Link>
        <Link  style={{color:'white'}} to="/services" onClick={closeMenu}>
          Doctors
        </Link>
        <Link style={{color:'white'}} to="/membership" onClick={closeMenu}>
          Vouchers
        </Link>
        <Link style={{color:'white'}} to="/contact" onClick={closeMenu}>
          Generate Voucher
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}

export default NavbarA;
