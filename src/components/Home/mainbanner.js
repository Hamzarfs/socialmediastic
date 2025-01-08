import React from 'react';
import background from "../../images/bannerbg.webp"
import bannerimage from "../../images/bannerimage.webp"
import '../../MainBanner.css'; // Import the CSS file
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon
import { Link } from 'react-scroll';


const MainBanner = () => {
  return (
    
        <section
          className="main-banner"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="subheading">Top Social Media Agency</div>
            <h1 className="banner-heading">Professional Social Media Services </h1>
            <p className="banner-text">
            Ready to elevate your brand's online presence? Partner with Social Mediastics to achieve your marketing goals.
            </p>
            
            <div className="button-group">
            <a href="tel:+7327979165" style={{ textDecoration: 'none' }}>
      <button className="get-started-btn">
        Free Consultation
        <AiOutlineArrowRight className="arrow-icon" />
      </button>
    </a>

    <Link
        to="pricing-section"  // Target component id
        smooth={true}           // Enable smooth scroll
        duration={500}          // Duration of the scroll in ms
        offset={-70}            // Optional offset to adjust position (like sticky navbar)
      >
        <button className="get-started-transparent-btn">
          View Pricing
          <AiOutlineArrowRight className="arrow-icon" />
        </button>
      </Link>
</div>
            
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center">
            <img 
              src={bannerimage} 
              alt="Social Media Services" 
              className="img-fluid banner-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
