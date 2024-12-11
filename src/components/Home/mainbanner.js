import React from 'react';
import background from "../../images/bannerbg.webp"
import bannerimage from "../../images/bannerimage.webp"
import '../../MainBanner.css'; // Import the CSS file
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon


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
            <div className="subheading">Top #1 Social Media Agency</div>
            <h1 className="banner-heading">We Elevate Brand’s Social Media Services</h1>
            <p className="banner-text">
              Find someone by username or email on Social Networks, Dating Sites, Forums, Social Media.
            </p>
            <div className="button-group">
            <a href="#" className="get-started-btn">
      Get Started
      {/* Apply custom CSS class to rotate the arrow */}
      <AiOutlineArrowRight className="arrow-icon" />
    </a>
    <a href="#" className="get-started-transparent-btn">
      Get Started
      {/* Apply custom CSS class to rotate the arrow */}
      <AiOutlineArrowRight className="arrow-icon" />
    </a>
              
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
