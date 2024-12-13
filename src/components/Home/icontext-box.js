// IconTextHomeBox.js
import React from 'react';
import '../../IconTextHomeBox.css'; // Ensure the CSS file contains styles for this component.

const industries = [
  { icon: 'path-to-icon/ecommerce.png', text: 'Ecommerce' },
  { icon: 'path-to-icon/food.png', text: 'Food & Beverages' },
  { icon: 'path-to-icon/pickup.png', text: 'Pickup & Delivery' },
  { icon: 'path-to-icon/transportation.png', text: 'Transportation' },
  { icon: 'path-to-icon/healthcare.png', text: 'Healthcare & Medical' },
  { icon: 'path-to-icon/blockchain.png', text: 'Blockchain' },
  { icon: 'path-to-icon/banking.png', text: 'Banking & Finance' },
  { icon: 'path-to-icon/social.png', text: 'Social Networking' },
  { icon: 'path-to-icon/real-estate.png', text: 'Real Estate' },
  { icon: 'path-to-icon/education.png', text: 'Education' },
  { icon: 'path-to-icon/iot.png', text: 'Internet of Things' },
  { icon: 'path-to-icon/on-demand.png', text: 'On-Demand App' },
];

const IconTextHomeBox = () => {
  return (
    <section className="icontext-home-box-section">
      <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="icontext-home-box-heading">Industries We Serve</h2>
          </div>
        </div>

        {/* Icon Boxes Rows */}
        <div className="row">
          {industries.map((item, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch" key={index}>
              <div className="icontext-home-box d-flex flex-column justify-content-center align-items-center">
                <img src={item.icon} alt={item.text} className="icontext-home-box-icon" />
                <p className="icontext-home-box-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconTextHomeBox;