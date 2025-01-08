import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon from react-icons
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../Header.css'; // Import the CSS file
import logo from "../../images/logo.png"; // Import logo

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg container">
        <div className="d-flex align-items-center">
          {/* Logo */}
          <Link to="/" className="navbar-brand logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-work">Our Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          {/* Get Started Button */}
          <a
            className="get-started-btn"
            data-bs-toggle="modal"
            data-bs-target="#popupForm"
          >
            Get Started
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
      </nav>

    </header>
  );
};

export default Header;
