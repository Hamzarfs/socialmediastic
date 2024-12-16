import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../OurProcessSection.css';  // Import the unique custom CSS

const OurProcess = () => {
  return (
    <section className="our-process-section py-5">
      <div className="container">
        {/* First Row: Heading */}
        <div className="row mb-4">
          <div className="col text-center">
            <h2>Our Work Process</h2>
          </div>
        </div>

        {/* Second Row: Image */}
        <div className="row">
          <div className="col text-center">
            <img
              src="https://via.placeholder.com/800x400" // Replace with your image
              alt="Our Work Process"
              className="img-fluid process-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
