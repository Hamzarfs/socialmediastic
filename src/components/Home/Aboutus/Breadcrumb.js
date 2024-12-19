import React from "react";
import { Link } from "react-router-dom";
import "../../../Breadcrumb.css";
import BackgroundImage from "../../../images/bannerbg.webp"; // Your uploaded image

// Update the component to accept props
const Breadcrumb = ({ title, link, linkText }) => {
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
            <h2 className="breadcrumb-title mb-2">{title}</h2> {/* Dynamic title */}
            <p className="breadcrumb-links">
              <Link to="/" className="text-dark text-decoration-none">
                Home
              </Link>
              &nbsp; &gt; &nbsp;
              <Link to={link} className="text-primary text-decoration-none">
                {linkText}
              </Link> 
             
              {/* Dynamic link */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
