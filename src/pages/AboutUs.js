import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Home/Aboutus/Breadcrumb';
import Header from '../components/Home/header';
import ExperienceSec from '../components/Home/Aboutus/Experience';
import ImageRightBanner from '../components/Home/Aboutus/ImageRight';
import ourmission2 from "../images/ourmission2.webp"; 
import ourmission from "../images/ourmission.webp"; 
import ourvission from "../images/ourvission.webp"; 
import CtaHome from '../components/Home/cta-home';
import Headingtext from '../components/Home/Aboutus/Headingimage';
import whyservice1 from '../images/whyservice1.png';
import whyservice2 from '../images/whyservice2.png';
import whyservice3 from '../images/whyservice3.png';
import whyservice4 from '../images/whyservice4.png';
import whyservice5 from '../images/whyservice5.png';
import whyservice6 from '../images/whyservice6.png';
import WhyChooseService from '../components/Home/Aboutus/whychoose';
import TestimonialSection from '../components/Home/Testimonial';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';

const About = () => {


  const heading = {
    title: (
        <>
           Why Choose Social Mediastic?
        </>
    ),
    // highlight:"Animation Video",
    // title2: "Production Company in the USA"
};
// const description = "Our team of highly qualified and creative animators excel in producing meticulously crafted logo animations. After studying your brand, we produce creative animated logos to tell your brand story and make it memorable.";
const steps = [
    {
        image: whyservice1,
        alt: "Entertainment",
        title: "Entertainment",
        description: "Our animation studio specializes in creating outstanding visual effects, character animations, and motion graphics in film and television. We produce interactive gaming experiences with 3D and other animation options."
    },
    {
        image: whyservice2,
        alt: "Commercial",
        title: "Commercial",
        description: "Our studio is engaged in the production of captivating commercials, explainer videos, or corporate videos that help brands and businesses communicate well."
    },
    {
        image: whyservice3,
        alt: "Nonprofit",
        title: "Nonprofit",
        description: "We create powerful animations to amplify the voices of nonprofits and social causes. Using very strong imagery and engaging storytelling, we create videos that succeed in grabbing audience attention."
    },
    {
        image: whyservice4,
        alt: "Healthcare",
        title: "Healthcare",
        description: "The studio helps create clear and informative medical animations to educate healthcare professional and patients, in addition to developing interactive animations around pharmaceutical concepts."
    },
    {
        image: whyservice5,
        alt: "Educational",
        title: "Educational",
        description: "In creating e-learning materials, we specialize in interactive animations and simulations that animate difficult subjects, thus appealing to their visual sense. "
    },
    {
        image: whyservice6,
        alt: "Sports",
        title: "Sports",
        description: "The studio creates vibrant graphics and animations for sports broadcasts as well as interesting videos promoting sports events and athletes."
    }
];

    return (
        <div>
            <Header/>
            <Breadcrumb/>
            <ExperienceSec/>
            <div className="container py-3">
             {/* First Row */}
         <div className="row align-items-center">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 text-center text-md-start">
            <h2 className="experience-heading text-center">We think our story is worth
            sharing with you</h2>
          </div>
          <div className="col-md-2">
            </div>
          </div>
          </div>
          <ImageRightBanner
                // subHeading="ABOUT US"
                heading="Our History"
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                        We, as Social Mediastic, have blended empowering individuals and businesses by ensuring the effective use of social media. We began with customer satisfaction promises, whereby most solutions were customized to individual uniqueness to achieve the desired results. Over the years, many clients have proudly proven to have achieved successful digital marketing results, from raising brand awareness and engaging target audiences through website traffic, and increased sales, to improved brand reputation. Today, forward-looking by innovative means and backed by hard and data-driven insights, we are transformed to stay ahead of the client expectation curve and pave the way to a better tomorrow for social media.

                    </>
                }
                 imageSrc={ourmission2}
                objectfit="contain"
                // imageHeight="500px"  
                // imageWidth="450px"     
                borderRadius="10px"
                reverseOrder={false}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />

<ImageRightBanner
                // subHeading="ABOUT US"
                heading="Our Mission "
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                       The objective is to reward society with competitively priced services to foster their growth in the new economy. We assist businesses in targeting their customers and their marketing objectives by employing proper strategies, creative plans, and data analysis. Our mission is ‘to be there for our customers’ meaning that we intend to provide good service to our clients and satisfy their requirements. Through social media interaction policies that work, we intend businesses to remain relevant on all fronts.

                    </>
                }
                 imageSrc={ourmission}
                objectfit="contain"
                // imageHeight="500px"  
                // imageWidth="450px"     
                borderRadius="10px"
                reverseOrder={true}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />

<ImageRightBanner
                // subHeading="ABOUT US"
                heading="Our Vision "
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                       To be at the top in offering other comprehensive social media services and technologies needed for the growth of marketing. We see a world in which every business large and small can use social media tools to reach their markets, develop strong brands, and enhance profitability. By being proactive and being at the forefront of change, we seek to be the preferred partner for businesses in the contemporary era.

                    </>
                }
                 imageSrc={ourvission}
                objectfit="contain"
                // imageHeight="500px"  
                // imageWidth="450px"     
                borderRadius="10px"
                reverseOrder={false}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />
            <CtaHome/>
          <Headingtext/>
       
          <WhyChooseService
                heading={heading}
                // description={description}
                steps={steps}
            />
            <TestimonialSection/>
            <ContactUsFormHome/>
            <Footer/>
        
        </div>
    );
};

export default About;
