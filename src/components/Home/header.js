import React, { useState, useEffect } from 'react';
import '../../Header.css'; // Import the CSS file
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";  // Using Link for React Router

import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon

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
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-2 col-md-2 d-flex align-items-center">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Social Mediastic" />
                </Link>
              </div>
            </div>

            <div className="col-10 col-md-10 text-end">
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

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/our-work" className="nav-link">Our Work</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                  </li>
                </ul>

                {/* Get Started Button */}
                <a
                  className="get-started-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#popupForm"
                  href="#"
                >
                  Get Started
                  <AiOutlineArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
