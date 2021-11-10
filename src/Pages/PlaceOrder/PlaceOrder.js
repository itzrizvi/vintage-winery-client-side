import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './PlaceOrder.css';

const PlaceOrder = () => {
    // Using useParams Hook for dynamic ID
    const { wineID } = useParams();

    // State for Wine Details
    const [wineDetail, setWineDetail] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/wines/${wineID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setWineDetail(data));
    }, [wineID]);
    return (
        <>
            <Navigation />
            <h2>{wineDetail.name}</h2>
            <h2>{wineDetail._id}</h2>
            <Footer />

        </>
    );
};

export default PlaceOrder;