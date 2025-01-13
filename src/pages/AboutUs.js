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
import whyservice1 from '../images/whyservice1.svg';
import whyservice2 from '../images/whyservice2.svg';
import whyservice3 from '../images/whyservice3.svg';
import whyservice4 from '../images/whyservice4.svg';
import whyservice5 from '../images/whyservice5.svg';
import whyservice6 from '../images/whyservice6.svg';
import WhyChooseService from '../components/Home/Aboutus/whychoose';
import TestimonialSection from '../components/Home/Testimonial';
import Footer from '../components/Home/footer';
import ContactUsFormHome from '../components/Home/contactushome';
import { Helmet } from 'react-helmet';
import PopupForm from '../components/PopupForm';

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
        alt: "Captivating Content Creation",
        title: "Captivating Content Creation",
        description: "Our team specializes in creating crafty social posts that attract your people's attention and encourage them to interact."
    },
    {
        image: whyservice2,
        alt: "Industry Leader",
        title: "Industry Leader",
        description: "Our social experts boast years of experience, giving us insight into any industry. We can surely create tailor-made content for your target audience."
    },
    {
        image: whyservice3,
        alt: "Global Clientele",
        title: "Global Clientele",
        description: "That attests to our competence in bringing social media solutions to the world diverse clientele from across the globe became our proud partner."
    },
    {
        image: whyservice4,
        alt: "Seamless Social Media Management",
        title: "Seamless Social Media Management",
        description: "Just let our hands get dirty while running through all the social maelstroms: we shall keep your interests well covered and let you concentrate on your core business."
    },
    {
        image: whyservice5,
        alt: "Custom Service Plans",
        title: "Custom Service Plans",
        description: "A flexible, pay-as-you-go service model for social media services would enable you to pick relevant services according to your requirements and budget."
    },
    {
        image: whyservice6,
        alt: "Measurable Results",
        title: "Measurable Results",
        description: "Providing detailed analytics and reports related to the performance of your social media campaigns to get measurable, tangible results."
    }
];

    return (
        <div>
            
            <Header/>
            
      <Helmet>
        <title>About Us - Social Mediastic</title>
        <meta name="description" content="Learn about our team of SMM experts dedicated to helping your brand grow. We provide innovative strategies to boost engagement." />
        <link rel="canonical" href="https://socialmediastic.com/about-us" />
      </Helmet>
            <Breadcrumb 
              title="About Us" 
              link="/about-us" 
              linkText="About Us" 
              />
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
            <PopupForm/>
            <Footer/>
        
        </div>
    );
};

export default About;
