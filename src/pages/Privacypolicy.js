import React from 'react';
import Header from '../components/Home/header';
import Footer from '../components/Home/footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {

    return (
        <div>
            <Header/>
            
      <Helmet>
        <title>Privacy Policy - Social Mediastic</title>
        <meta name="description" content="Read our Privacy Policy to understand how we protect your data and ensure your privacy while using our social media services." />
        <link rel="canonical" href="https://www.socialmediastic.com/privacy-policy" />
      </Helmet>
            <div className="container mt-4">
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <div className="row">
        <div className="col-12">
          <h5>Social Mediastic “Our Site”</h5>
          <p>
            We admit the importance of online privacy for the users of our website and this has been at the core of our values since inception. Our privacy policies stand true for all of our users, namely site “visitors” of the website who may or may not conduct any business transaction on the website. Furthermore, it is applicable to those visitors and authorized users who avail of our paid services.
          </p>

          <h5>User Information</h5>
          <p>
            This is to refer to any information that makes out or can be used to classify, get in touch with, or spot on to whom such information relates, including, and not only restricted to, address, fax number, name, phone number, financial profits, email address, credit card info, and social security number. However, “User Information” does not include any information that is anonymously collected (i.e., without any identification of the visitor/user) or any demographic information that is not connected to an individual who has been identified.
          </p>
          <p>
            This refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
          </p>

          <h5>Basic “User Information” collection</h5>
          <p>
            In pursuit of serving our visitors well, we may collect some necessary profile information. We may also collect further information from some of our authorized users, “Clients,” their names, phone/mobile numbers, email address, their nature of work/business, the size of their company, and their sales products.
          </p>

          <h5>Third-party vendor collecting “User Information.”</h5>
          <p>
            Concurrent with ourselves collecting the “User Information,” there are some third-party vendors (that may include banks, credit card companies, and other e-payment gateways) who primarily provide credit lines, escrow, and e-payments systems and may also be collecting the same information. We do not have control over how they make use of such information, but we do ask these vendors to reveal how they will use this personnel information granted to them by visitors and other authorized users.
          </p>

          <h5>How does our website use “User Information”?</h5>
          <p>
            We utilize “User Information” to make custom changes to our website, to plan suitable service packaging and other offerings, and to facilitate buying and selling transactions on the website. In order to keep our clients informed about our new offerings, research sharing, and sales opportunities, we may send emails to “Visitors” and authorized users related only to the subject matter of the website.
          </p>

          <h5>Sharing of “User Information”</h5>
          <p>
            Authorized User Information may be shared, in some instances, with others of the same class who like to evaluate potential business with other authorized users. Some cumulative information about our visitors and authorized users, which may include demographics, may be shared with our partners/affiliates and some third-party vendors. To save privacy, we offer our visitors a safe door to opt themselves out by not receiving information or being contacted by us or by any third-party agency acting on our behalf.
          </p>

          <h5>How we store “User Information.”</h5>
          <p>
            User Information, which is collected by ourselves is stored with us securely. No one among our third parties or employees of Social Mediastic except as indicated above has the right to access information.
          </p>

          <h5>Option available to our visitors regarding the use of information</h5>
          <p>
            All of our website visitors may choose not to receive any unsolicited information from our side or being get in touch with any of our vendors/affiliates/partners by sending us their responses over email reply or contacting us at info@socialmediastic.com.
          </p>

          <h5>Use of cookies on the website</h5>
          <p>
            Cookies are being set up for multiple reasons. To enhance our visitor's user experience with our website, we obtain certain information about their preferences using setting up cookies. Cookies are also meant to be set up for the protection of our authorized users.
          </p>

          <h5>User Information access for our affiliates</h5>
          <p>
            To continue providing stable and excellent services to our clients, Social Mediastic will keep entering into partnerships with third-party vendors and companies. Such affiliates may have access to some “User information” on request for making some evaluation of Authorized User for services eligibility. Our policy does not provide any cover for the use of information collected by them. To comply with the law, we will also, in pursuit of the safety and protection of our Visitors and Authorized users, disclose information as and when it deems fit and directed by external law enforcement agencies.
          </p>

          <h5>Keeping User Information secured</h5>
          <p>
            Our employees are well versed in our security policy and practices. We have a set protocol, and only a limited number of qualified associates with passwords have access to visitor and user information. We have strict and regular audit producers to make sure sensitive data, such as credit card numbers, etc, is protected by SSL (encryption protocols). Even though our website is commercially secured and we have taken every possible step to maintain a safe environment for electronic transactions and communication, chances for breaches, tampering, and break-ins are still possible, and we don’t own any liability or guarantee in case of occurrence of any such event to our users and visitors.
          </p>

          <h5>Updating Visitors information</h5>
          <p>
            In case our visitors and authorized users want to contact or update any information about themselves they may send us an email at info@socialmediastic.com.
          </p>

          <h5>Rights for revocation of User Information from the website</h5>
          <p>
            If any authorized user wants us to delete or deactivate their information, they can send us their deactivation request at info@socialmediastic.com. However, due to backups, complete record deletion is not possible and some of his information may stay with us as residual. This information will be functionally deleted and will not be sold or transferred to any third party.
          </p>

          <h5>Changes in Privacy Policy</h5>
          <p>
            Any changes in the policy will be made live on our website. In case we change our policy in such a way that may cause a disclosure of our visitors and authorized user information which was not permitted before as per our current policy, we will contact such user or visitor to allow us to disclose that info.
          </p>

          <h5>Links on our website</h5>
          <p>
            We have different links on our website that will route you to some other website, we recommend you to go through their privacy policy as they may vary from ours.
          </p>
        </div>
      </div>
    </div>
     <Footer/>


        
        </div>
    );
};

export default PrivacyPolicy;
