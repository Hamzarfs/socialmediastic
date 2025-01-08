import React from 'react';
import { Link } from 'react-router-dom';
import '../services.css'
import sliderImg1 from '../images/service1.webp'
import sliderImg2 from '../images/service2.webp'
import sliderImg3 from '../images/service3.webp'
import sliderImg4 from '../images/service4.webp'
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
import { Helmet } from 'react-helmet';
import PopupForm from '../components/PopupForm';

const Services = () => {
    const slides = [
        {
            title: 'Social Media Management Services',
            img: sliderImg1,
        },
        {
            title: 'Social Media Advertising Services',
            img: sliderImg2,
        },
        {
            title: 'Short Video Management Services',
            img: sliderImg3,
        },
        {
            title: 'Short Video Advertising Services',
            img: sliderImg4,
        },

    ]


    return (
        <div>
            <Header/>
            <Helmet>
        <title>Our Services | Expert Digital Marketing Solutions</title>
        <meta name="description" content="Social Mediastic uses digital marketing services to help companies grow their business with services like social media marketing & advertising." />
        <link rel="canonical" href="https://socialmediastic.com/services" />
      </Helmet>
            <Breadcrumb 
              title="Services" 
              link="/contact-us" 
              linkText="Services" 
              />
                <section className="services-we-deliver py-4 position-relative">
                <div className="container">
                    <div className="text-center">
                        <h2 className="experience-heading">Boost Your Brand Visibility and Engagement</h2>
                        <p className="secondformsec-description text-center">Our social media services put your brand in front of thousands of targeted people who are likely to convert into clients or customers.</p>
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
                                        <h3 className="secondformsec-description mt-3 ">{slide.title}</h3>
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
            <h2 className="experience-heading">How Social Media Services Can Transform Your Business</h2>
          </div>
          {/* Description */}
          <div className="col-md-6 text-center text-md-start">
            <p className="experience-text">
            Social networking is obligatory these days for any business, regardless of size. If utilized properly, a business can take its brand visibility up several notches, communicate with its ideal targets, and drive sales. Companies would benefit from using the mighty platforms of strategized content development, community building, and paid advertising, to interact with the customers at another level to generate leads that will act as the bridge to later attain sustainable growth.
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
            <PopupForm/>
        
        </div>
    );
};

export default Services;
