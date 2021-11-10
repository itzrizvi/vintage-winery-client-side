import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Experts />
            <Footer />
        </>
    );
};

export default Home;