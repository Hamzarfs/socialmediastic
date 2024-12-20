import React from 'react';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import { Helmet } from 'react-helmet';


const TermsandConditions = () => {

    return (
        <div>
            <Header/>
            
      <Helmet>
        <title>Terms & Conditions - Social Mediastic</title>
        <meta name="description" content="Review our terms and conditions to understand the rules and guidelines for using our smm services. By using our site, you agree to these terms." />
        <link rel="canonical" href="https://www.socialmediastic.com/terms-and-conditions" />
      </Helmet>
            <div className="container py-5">
      <h1 className="text-center mb-4">Terms & Conditions</h1>
      <div className="row">
        <div className="col-12">
          <h5>Introduction</h5>
          <p>
            The following terms and conditions relate and apply to your usage of this website, www.socialmediastic.com, as well as the materials and information contained in it. You recognize and admit that you have read, understand, accept, and agree to be bound by the following terms and conditions on this page.
          </p>

          <h5>Accuracy of Information</h5>
          <p>
            Nothing on this website is considered a replacement for any advice, and any decision made with that information is at your risk and responsibility. Even though Social Mediastic endeavors to give accurate, full, and up-to-date information from reliable sources, Social Mediastic makes no warranties or representations, either written or implied guarantee, as to whether the information given on or through this website is accurate, complete, or up to date.
          </p>

          <h5>Intellectual Property</h5>
          <p>
            All rights reserved, Social Mediastic holds all rights to all information provided on or by this website. You may not duplicate, or reproduce any of the information contained in this website in any form or by any means unless prior consent is obtained from Social Mediastic.
          </p>

          <h5>Changes to Policies</h5>
          <p>
            Occasionally, Social Mediastic will change its policies and inform its users & visitors of it. Social Mediastic reserves the right to reject any user/member to or for the social media marketing services without declaring the cause of doing so. Further, Social Mediastic reserves the right to terminate the services for any member/website without giving reason for termination.
          </p>
        </div>
      </div>
    </div>
     <Footer/>


        
        </div>
    );
};

export default TermsandConditions;
