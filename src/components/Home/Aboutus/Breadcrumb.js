import React from "react";
import { Link } from "react-router-dom";
import "../../../Breadcrumb.css";
import BackgroundImage from "../../../images/bannerbg.webp"; // Your uploaded image

const Breadcrumb = () => {
  return (
    <section
      className="breadcrumb-section d-flex align-items-center"
      style={{
        background: `url(${BackgroundImage}) no-repeat center center/cover`,
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <h2 className="breadcrumb-title mb-2">About Us</h2>
            <p className="breadcrumb-links">
              <Link to="/" className="text-dark text-decoration-none">
                Home
              </Link>
              &nbsp; &gt; &nbsp;
              <Link to="/about" className="text-primary text-decoration-none">
                About Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
