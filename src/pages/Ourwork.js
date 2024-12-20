import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';
import LogoPortfolio from '../components/Home/Porfoliogallery';
import { Helmet } from 'react-helmet';

const Ourwork = () => {

    return (
        <div>
            <Header/>
           
      <Helmet>
        <title>Case Study Archive - Social Mediastic</title>
        <meta name="description" content="We've helped numerous clients boost their business and ROI. Check out the case studies and results from some of our successful partnerships!" />
        <link rel="canonical" href="https://www.socialmediastic.com/our-work" />
      </Helmet>
            <Breadcrumb 
              title="Our Work" 
              link="/our-work" 
              linkText="Our Work" 
              />
              <LogoPortfolio/>
            <ContactUsFormHome/>
            <Footer/>
        
        </div>
    );
};

export default Ourwork;
