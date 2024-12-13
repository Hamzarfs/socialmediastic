// GuaranteedSection.js
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import guarantee from "../../images/guarantee.png";
import '../../GuaranteedSection.css';

const GuaranteedSection = () => {
  return (
    <section className="guaranteed-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Column 1 - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={guarantee}
              alt="Guaranteed Badge"
              className="guaranteed-image img-fluid"
            />
          </div>

          {/* Column 2 - Text Content */}
          <div className="col-lg-6 col-md-12">
            <h2 className="guaranteed-heading">Our Fair Refund Policy</h2>
            <ul className="guaranteed-list">
              <li>We stand by our work and backup everything we do!</li>
              <li>When you work with us you can rest easy we’ll be there the moment you need us!</li>
              <li>If you’re unsatisfied, do let us know and we’ll refund your money!</li>
            </ul>
            <div className="button-group">
              <button className="get-started-btn">
                Free Consultation
                <AiOutlineArrowRight className="arrow-icon" />
              </button>
              <button className="get-started-transparent-btn">
                View Pricing
                <AiOutlineArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteedSection;
