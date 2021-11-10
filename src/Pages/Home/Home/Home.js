import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import About from '../About/About';


const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Footer />
        </>
    );
};

export default Home;