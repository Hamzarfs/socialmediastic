import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Home/header';
import MainBanner from '../components/Home/mainbanner';
import AwardsLogo from '../components/Home/awardslogo';
import TabHomeSection from '../components/Home/HomeTabControl';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import right arrow icon
import PricingSection from '../components/Home/PricingSection';

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
               <PricingSection/>
             </div>
            <h1>Home Page</h1>
            <p>Welcome to our website!</p>
           
            <Link to="/about">Go to About Us</Link>
        </div>
    );
};

export default Home;
