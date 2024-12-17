import React, { useState, useEffect } from 'react';
import '../../Header.css'; // Import the CSS file
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon

const Header = () => {
  // State to track if the header should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // Hook to handle the scroll event and update the sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);  // Add sticky class if scrolled
      } else {
        setIsSticky(false); // Remove sticky class if at the top
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-4 col-md-4 d-flex align-items-center">
              {/* Logo */}
              <div className="logo">
                <img src={logo} alt="Social Mediastic" />
              </div>
            </div>

            <div className="col-8 col-md-8 text-end">
              {/* Navigation Links */}
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
                    <Link to="/" className="nav-link" >Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/about-us" className="nav-link" >About Us</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Our Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blogs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>

                {/* Get Started Button */}
                <a href="#" className="get-started-btn">
                  Get Started
                  {/* Apply custom CSS class to rotate the arrow */}
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
