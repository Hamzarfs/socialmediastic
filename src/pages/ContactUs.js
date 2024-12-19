import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';

const Contactus = () => {

    return (
        <div>
            <Header/>
            <Breadcrumb 
              title="Contact Us" 
              link="/contact-us" 
              linkText="Contact Us" 
              />
            <ContactUsFormHome/>
            <Footer/>
        
        </div>
    );
};

export default Contactus;
