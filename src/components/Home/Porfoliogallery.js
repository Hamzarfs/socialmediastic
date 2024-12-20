import React from 'react';
import '../../portfolio.css'; // Import the CSS file
import Portfolio1 from '../../images/gallery1.webp';
import Portfolio2 from '../../images/gallery2.webp';
import Portfolio3 from '../../images/gallery3.webp';
import Portfolio4 from '../../images/gallery4.webp';
import Portfolio5 from '../../images/gallery5.webp';
import Portfolio6 from '../../images/gallery6.webp';
import Portfolio7 from '../../images/gallery7.webp';
import Portfolio8 from '../../images/gallery8.webp';
import Portfolio9 from '../../images/gallery9.webp';


const LogoPortfolio = () => {
  return (
    <div className="logo-designs-portfolio py-4">
      <div className="container">
        {/* Heading for the Portfolio */}
        <h2 className="portfolio-heading">Our Creative Work</h2>
        
        <div className="row filter-button-group"></div>
        
        <div className="row gallery">
          <hr className="custom-divider-ca" />
          
          {/* Iconic Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio1} alt="Iconic Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio2} alt="Illustrative Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio3} alt="Typography Logo 2" />
          </div>

          {/* Typography Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio4} alt="Typography Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio5} alt="Iconic Logo 2" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio6} alt="Illustrative Logo 1" />
          </div>

          {/* Illustrative Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio7} alt="Illustrative Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio8} alt="Typography Logo 2" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio9} alt="Iconic Logo 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPortfolio;
