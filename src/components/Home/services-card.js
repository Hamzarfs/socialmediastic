import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CreativeServices.css"; // Custom styling
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";

const CreativeServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Developing the look and feel of physical products, aesthetics, and functionality.",
      image: service1, // Replace with actual image path
    },
    {
      title: "Social Media Advertising",
      description:
        "Developing the look and feel of physical products, aesthetics, and functionality.",
      image: service2,
    },
    {
      title: "Short Video",
      description:
        "Developing the look and feel of physical products, aesthetics, and functionality.",
      image: service1,
    },
    {
        title: "Short Video",
        description:
          "Developing the look and feel of physical products, aesthetics, and functionality.",
        image: service2,
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
