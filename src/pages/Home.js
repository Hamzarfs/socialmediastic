import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Home/header';
import MainBanner from '../components/Home/mainbanner';

const Home = () => {
    return (
        <div>
             <Header/>
             <MainBanner/>
            <h1>Home Page</h1>
            <p>Welcome to our website!</p>
           
            <Link to="/about">Go to About Us</Link>
        </div>
    );
};

export default Home;
