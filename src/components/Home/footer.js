import React from 'react';
import footer from '../../images/footerlogo.png'; // Ensure the image path is correct
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../../footer.css';



import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#222222' }}>
            <div className="container">
                <div className="row">

                    {/* About Section with Logo */}
                    <div className="col-md-4">
                        <h5 className="footer-heading-sub">
                            <Link to="/"> <img src={footer} alt="Animation Rush" style={{ maxWidth: '150px' }} /></Link>
                        </h5>
                        <p className="text-light">
                            Animation Rush is the best animation studio and the best creator of visual content in terms of animation. The team of artists and animators in this animation studio can realize those ideas in wonderful animations. Services offered include explainer videos, motion graphics, and also 3D animations and character designs.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-2">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="/our-process" className="text-light text-decoration-none">Our Process</a></li>
                            <li><a href="/contact-us" className="text-light text-decoration-none">Contact Us</a></li>


                        </ul>
                    </div>
                    {/* Our Services Section */}
                    <div className="col-md-2 mb-4">
                        <h5 className="footer-heading">Other Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li> <a href="/services" className="text-light text-decoration-none">Services</a></li>
                            <li> <a href="/terms-conditions" className="text-light text-decoration-none">Terms & Condition</a></li>
                            <li> <a href="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Follow Us and Contact Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="d-flex gap-3 mb-3">
                            <a href="https://www.facebook.com/AnimationRush/" className="text-light"><FaFacebookF size={25} /></a>
                            <a href="https://www.instagram.com/animationrush_us/" className="text-light"><FaInstagram size={25} /></a>
                            <a href="https://www.linkedin.com/company/animation-rush/" className="text-light"><FaLinkedinIn size={25} /></a>
                        </div>

                        {/* Contact Us Section */}
                        <div className="contact-details p-3" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
                            <h4 className="footer-heading">Contact Us</h4>
                            <p className="mb-1 text-light">
                                <FaPhoneAlt />
                                <a href="tel:+15515543283" className="text-light text-decoration-none">  +1 (551) 554-3283</a>
                            </p>
                            <p className="mb-1 text-light">
                                <FaEnvelope />
                                <a href="mailto:info@animationrush.com" className="text-light text-decoration-none"> info@animationrush.com</a>
                            </p>
                            <p className="text-light">
                                <FaMapMarkerAlt />
                                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> 41 Winthrop Rd, Edison, NJ 08817</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section with two columns */}
            <div className="footer-bottom text-center py-2">
                <p>© 2024 Animation Rush. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
