// CtaHome.js
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../../CtaHome.css';

const CtaHome = () => {
  return (
    <section className="cta-home-section">
      <div className="container ">
        <div className='background-cta'>
        <div className="row align-items-center">
          {/* Column 1 - Text Content */}
          <div className="col-lg-8 col-md-12">
            <h2 className="cta-home-heading">
            Are You <span className="outline-text">Runing an Agency?</span>
            </h2>
            <p className="cta-home-subtext">Explore Our Exclusive White Label Packages Today!</p>
          </div>

          {/* Column 2 - Button */}
          <div className="col-lg-4 col-md-12 " style={{justifyItems:'center'}}>
          <a data-bs-toggle='modal' data-bs-target="#popupForm">
            <button className="get-started-green-btn">
              Let’s Get Started
              <AiOutlineArrowRight className="arrow-icon" />
            </button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaHome;
