import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Wines from '../Wines/Wines';

const AllWines = () => {
    return (
        <>
            <Navigation />
            <Wines />
            <Footer />
        </>
    );
};

export default AllWines;