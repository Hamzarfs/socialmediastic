import React from 'react';
import { Link } from 'react-router-dom';
import '../services.css'
import sliderImg1 from '../images/service1.webp'
import sliderImg2 from '../images/service2.webp'
import sliderImg3 from '../images/service3.webp'
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';
import BackgroundImage from "../images/imageheading.webp";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css";
import CreativeServices2 from '../components/Home/services-card2';
import TestimonialSection from '../components/Home/Testimonial';

const Services = () => {
    const slides = [
        {
            title: '2D Animation',
            img: sliderImg1,
        },
        {
            title: '3D Animation',
            img: sliderImg2,
        },
        {
            title: 'Explainer Video',
            img: sliderImg3,
        },
        {
            title: 'Motion Graphics',
            img: sliderImg2,
        },

    ]


    return (
        <div>
            <Header/>
            <Breadcrumb 
              title="Services" 
              link="/contact-us" 
              linkText="Services" 
              />
                <section className="services-we-deliver py-4 position-relative">
                <div className="container">
                    <div className="text-center">
                        <h2 className="experience-heading">Our Expertise</h2>
                        <p className="secondformsec-description text-center">We offer a wide range of animation services to meet your unique needs.</p>
                    </div>

                    <div className="mx-sm-5">
                        <a className="slider-button slider-button-prev"><i className="fa-solid fa-chevron-left"></i></a>
                        <a className="slider-button slider-button-next"><i className="fa-solid fa-chevron-right"></i></a>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".slider-button-next",
                                prevEl: ".slider-button-prev",
                            }}
                            loop
                            autoplay={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i}>
                                    <div className="services-slide">
                                        <img src={slide.img} alt={slide.title} className="img-fluid" />
                                        <h3 className="secondformsec-description text-center mt-3 text-center">{slide.title}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>

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
          <div className="col-md-6 text-center text-md-start">
            <h2 className="experience-heading">A Digital Social Media
            Company Reshaping the Future</h2>
          </div>
          {/* Description */}
          <div className="col-md-6 text-center text-md-start">
            <p className="experience-text">
            To deliver our expertise flexibly and with maximum impact, we have developed three different ways of working. Each is adaptable to your core needs, processes and culture of your business.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-12 mb-4 mb-md-0">
            <img
              src={BackgroundImage}
              alt="Team working"
              className="img-fluid rounded heading-img"
            />
          </div>
        </div>
      </div>
    </section>


    <CreativeServices2/>
    <TestimonialSection/>


            
              
            <ContactUsFormHome/>
            <Footer/>
        
        </div>
    );
};

export default Services;
