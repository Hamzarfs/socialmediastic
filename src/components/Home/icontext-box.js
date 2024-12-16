// IconTextHomeBox.js
import React from 'react';
import '../../IconTextHomeBox.css'; // Ensure the CSS file contains styles for this component.
import industriesimg from "../../images/industries.png";
import industries1 from "../../images/industries1.png";
import industries2 from "../../images/industries2.png";
import industries3 from "../../images/industries3.png";
import industries4 from "../../images/industries4.png";
import industries5 from "../../images/industries5.png";
import industries6 from "../../images/industries6.png";
import industries7 from "../../images/industries7.png";
import industries8 from "../../images/industries8.png";
import industries9 from "../../images/industries9.png";
import industries10 from "../../images/industries10.png";
import industries11 from "../../images/industries11.png";

const industries = [
  { icon: industriesimg, text: 'Ecommerce' },
  { icon: industries1, text: 'Food & Beverages' },
  { icon: industries2, text: 'Pickup & Delivery' },
  { icon: industries3, text: 'Transportation' },
  { icon: industries4, text: 'Healthcare & Medical' },
  { icon: industries5, text: 'Blockchain' },
  { icon: industries6, text: 'Banking & Finance' },
  { icon: industries7, text: 'Social Networking' },
  { icon: industries8, text: 'Real Estate' },
  { icon: industries9, text: 'Education' },
  { icon: industries10, text: 'Internet of Things' },
  { icon: industries11, text: 'On-Demand App' },
];

const IconTextHomeBox = () => {
  return (
    <section className="icontext-home-box-section">
      <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="tabsectionheading">Industries We Serve</h2>
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