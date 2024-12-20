import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CreativeServices.css"; // Custom styling
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/services3.webp";
import service4 from "../../images/services4.webp";


const CreativeServices2 = () => {



 
  const services2 = [
    {
      title: "Social Media Management Services",
      description:
        "We develop and execute a robust social media strategy to increase brand visibility, engagement, and customer loyalty.",
      image: service1, // Replace with actual image path
    },
    {
      title: "Social Media Advertising Services",
      description:
        "We utilize data-driven insights to create and execute effective ad campaigns that reach the right audience at the right time.",
      image: service2,
    },
   
  ];
  const services3 = [
    {
      title: "Short Video Management Services",
      description:
        "We produce high-quality, shareable short videos to captivate audiences and drive brand awareness.",
      image: service3,
    },
    {
        title: "Short Video Advertising Services",
        description:
          "We create and optimize short video ads to deliver strong brand messaging and drive conversions.",
        image: service4,
      },
  ];

  return (
    <div className="container my-5 creative-services-section">
      {/* Row 1: Centered Heading */}
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-heading">
            Have a wide range of <br /> creative services
          </h2>
        </div>
      </div>

      {/* Row 2: Swiper Slider */}
      <div className="row mt-4 justify-content-center">
        <div className="col-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
            }}
          >
            {services2.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid"
                  />
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

        {/* Row 3: Swiper Slider */}
        <div className="row mt-4 justify-content-center">
        <div className="col-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
            }}
          >
            {services3.map((service3, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img
                    src={service3.image}
                    alt={service3.title}
                    className="img-fluid"
                  />
                  <div className="service-content">
                    <h3 className="service-title">{service3.title}</h3>
                    <p className="service-description">{service3.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CreativeServices2;
