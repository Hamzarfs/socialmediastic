import "../../Testimonials.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // updated import
import 'swiper/css/navigation'; // updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // Importing icons
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = () => {
    const testimonials = [
        {
            text: 'Your app brings so much peace and tolerance to our home.',
            name: 'Rachael',
            location: 'UK'
        },
        {
            text: 'I came to learn that the storyline in my head ... was holding me back.',
            name: 'Peter',
            location: 'Belgium'
        },
        {
            text: 'Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.',
            name: 'Keri',
            location: 'UK'
        },
        {
            text: 'Changes have brought so much ... calmness and positivity into my life.',
            name: 'Davide',
            location: 'Italy'
        },
        {
            text: 'Changes have brought so much ... calmness and positivity into my life.',
            name: 'Davide',
            location: 'Italy'
        },
        {
            text: 'Changes have brought so much ... calmness and positivity into my life.',
            name: 'Davide',
            location: 'Italy'
        }
    ];

    return (
        <section className='testimonial-section'>
            <div className='container'>
                <div className='row text-center'>
                    <h2>Testimonials</h2>
                </div>
                <div className='row'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 5 }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='testimonial-card'>
                                    <FaQuoteLeft className='quote-icon' />
                                    <p className='testimonial-text'>{testimonial.text}</p>
                                    <div className='testimonial-footer'>
                                        <p className='testimonial-name'>{testimonial.name}, {testimonial.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="row justify-content-center">
                    <div className="swiper-button-prev">
                        <a href="#prev" className="nav-link">
                           <i> <FaChevronLeft size={40} /></i> {/* Adjust size as needed */}
                        </a>
                    </div>
                    <div className="swiper-button-next">
                        <a href="#next" className="nav-link">
                            <FaChevronRight size={40} /> {/* Adjust size as needed */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
