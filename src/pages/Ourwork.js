import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';
import LogoPortfolio from '../components/Home/Porfoliogallery';

const Ourwork = () => {

    return (
        <div>
            <Header/>
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
