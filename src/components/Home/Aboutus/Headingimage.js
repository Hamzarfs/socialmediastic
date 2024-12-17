import React from "react";
import "../../../ExperienceSection.css";
import BackgroundImage from "../../../images/imageheading.webp"; // Background image path

const Headingtext = () => {
  return (
    <section
      className="experience-section"
      style={{
        // background: `url(${BackgroundImage}) no-repeat center center/cover`,
      }}
    >
      <div className="container py-4">
        {/* First Row */}
        <div className="row align-items-center mb-4">
          {/* Heading */}
          <div className="col-md-7 text-center text-md-start">
            <h2 className="experience-heading">Your Success, Our Priority</h2>
          </div>
          {/* Description */}
          <div className="col-md-5 text-center text-md-start">
            <p className="experience-text">
            Your success is at the heart of everything we do. We're committed to partnering with you to achieve your goals, providing expert guidance, innovative strategies, and unwavering support. Together, we'll elevate your brand and drive your business forward.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-12 mb-4 mb-md-0">
            <img
              src={BackgroundImage}
              alt="Team working"
              className="img-fluid rounded"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Headingtext;
