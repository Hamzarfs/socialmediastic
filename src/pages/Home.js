import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Home/header';
import MainBanner from '../components/Home/mainbanner';
import AwardsLogo from '../components/Home/awardslogo';
import TabHomeSection from '../components/Home/HomeTabControl';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon
import PricingSection from '../components/Home/PricingSection';
import GuaranteedSection from '../components/Home/Guarantee';
import CtaHome from '../components/Home/cta-home';
import IconTextHomeBox from '../components/Home/icontext-box';
import LogoPortfolio from '../components/Home/Porfoliogallery';
import CreativeServices from '../components/Home/services-card';
import Testimonials from '../components/Home/Testimonial';
import ContactUsFormHome from '../components/Home/contactushome';
import Footer from '../components/Home/footer';

const Home = () => {
    return (
        <div>
             <Header/>
             <MainBanner/>
             <AwardsLogo/>
             <TabHomeSection/>
             <div className="container">
             <div className="row align-items-center">
                      <div className="col-12 justify-content-center button-group">
               <button className="get-started-btn">
                 Free Consultation
                 <AiOutlineArrowRight className="arrow-icon" />
               </button>
             
               <button className="get-started-transparent-btn">
                 View Pricing
                 <AiOutlineArrowRight className="arrow-icon" />
               </button>
               </div></div>
               
             </div>
             <PricingSection/>
             <GuaranteedSection/>
             <CtaHome/>
             <IconTextHomeBox/>
             <div className="container">
             <div className="row align-items-center">
                      <div className="col-12 justify-content-center button-group">
               <button className="get-started-btn">
               Schedule A Free Consultation
                 <AiOutlineArrowRight className="arrow-icon" />
               </button>
               </div></div></div>
               <LogoPortfolio/>
               <div className="container">
             <div className="row align-items-center">
                      <div className="col-12 justify-content-center button-group">
               <button className="get-started-btn">
               Get Started
                 <AiOutlineArrowRight className="arrow-icon" />
               </button>
               </div></div></div>
              <CreativeServices/>
              <Testimonials/>
              <ContactUsFormHome/>
              <Footer/>
                        <h1>Home Page</h1>
            <p>Welcome to our website!</p>
           
            <Link to="/about">Go to About Us</Link>
        </div>
    );
};

export default Home;
