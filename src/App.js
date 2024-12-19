import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contactus from './pages/ContactUs';
import Services from './pages/Services';
import Ourwork from './pages/Ourwork';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-work" element={<Ourwork />} />
            </Routes>
        </Router>
    );
};

export default App;
