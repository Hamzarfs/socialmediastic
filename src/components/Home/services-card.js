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

const CreativeServices = () => {
  const services = [
    {
      title: "Social Media Management Services",
      description:
        "Let our professional social media management team to take care of your social media accounts. Our professional staff will develop interesting content, develop an active readership, and get the desired outcomes for your company.",
      image: service1, // Replace with actual image path
    },
    {
      title: "Social Media Advertising Services",
      description:
        "Display different little messages to your target consumers. To ensure that your brand is familiar to your target consumers and to generate leads that will increase your sales, our targeted advertising campaigns will do the trick.",
      image: service2,
    },
    {
      title: "Short Video Management Services",
      description:
        "Engage your viewers with great short videos. Our team will then design and implement all your short video content for you including development and distribution.",
      image: service3,
    },
    {
        title: "Short Video Advertising Services",
        description:
          "Expand with the help of short video adverts. Our targeted video ads will go further and ensure that you capture the desired market and convert them.",
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
      <div className="row mt-4">
        <div className="col-12">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
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
    </div>
  );
};

export default CreativeServices;
