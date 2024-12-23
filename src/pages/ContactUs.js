import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';
import { Helmet } from 'react-helmet';
import PopupForm from '../components/PopupForm';

const Contactus = () => {

  return (
    <div>
      <Header />
      <Helmet>
        <title>Contact Us - Social Mediastic</title>
        <meta name="description" content="Get in contact and complete our form to get a free proposal. Social Mediastic Agency offers social media services." />
        <link rel="canonical" href="https://socialmediastic.com/contact-us" />
      </Helmet>
      <Breadcrumb
        title="Contact Us"
        link="/contact-us"
        linkText="Contact Us"
      />
      <ContactUsFormHome />
      <Footer />
      <PopupForm/>

    </div>
  );
};

export default Contactus;
