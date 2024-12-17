import React from "react";
import "../../../ExperienceSection.css";
import BackgroundImage from "../../../images/experiencsecimg.webp"; // Background image path

const ExperienceSec = () => {
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
            <h2 className="experience-heading">Who We Are</h2>
          </div>
          {/* Description */}
          <div className="col-md-5 text-center text-md-start">
            <p className="experience-text">
            Social Mediastic is an award-winning social media marketing company that offers a full spectrum of data-driven social media marketing services. We develop growth-oriented social media marketing campaigns that make a positive impact on businesses.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-7 mb-4 mb-md-0">
            <img
              src={BackgroundImage}
              alt="Team working"
              className="img-fluid rounded"
            />
          </div>

          {/* Experience Box */}
          <div className="col-md-5">
            <div className="experience-box p-4">
              {/* Experience Items */}
              <div className="experience-item mb-4">
                <h3 className="experience-value">15+</h3>
                <p className="experience-label">Years of Experience</p>
              </div>
              <hr className="experience-divider" />
              <div className="experience-item mb-4">
                <h3 className="experience-value">120k</h3>
                <p className="experience-label">Successful Projects</p>
              </div>
              <hr className="experience-divider" />
              <div className="experience-item">
                <h3 className="experience-value">100%</h3>
                <p className="experience-label">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
