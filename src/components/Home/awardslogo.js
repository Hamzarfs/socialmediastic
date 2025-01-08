import React, { useEffect } from 'react';
import Slider from 'react-slick';
import '../../awards.css';
import award1 from '../../images/award1.png';
import award2 from '../../images/award2.png';
import award3 from '../../images/award3.png';
import award4 from '../../images/award4.png';
import award5 from '../../images/award5.png';
import award6 from '../../images/award6.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AwardsLogo = () => {

  // Slick Slider settings for infinite scrolling
  const settings = {
    infinite: true, // Infinite loop
    speed: 2000, // Speed of the transition
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set autoplay speed to 0 for continuous movement
    cssEase: 'linear', // Smooth transition effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="awards-logo-section py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <Slider {...settings}>
              <div>
                <img src={award1} alt="Award 1" className="awards-logo-image img-fluid" />
              </div>
              <div>
                <img src={award2} alt="Award 2" className="awards-logo-image img-fluid" />
              </div>
              <div>
                <img src={award3} alt="Award 3" className="awards-logo-image img-fluid" />
              </div>
              <div>
                <img src={award4} alt="Award 4" className="awards-logo-image img-fluid" />
              </div>
              <div>
                <img src={award5} alt="Award 5" className="awards-logo-image img-fluid" />
              </div>
              <div>
                <img src={award6} alt="Award 6" className="awards-logo-image img-fluid" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsLogo;
