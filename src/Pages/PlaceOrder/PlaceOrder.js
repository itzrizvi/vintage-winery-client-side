import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './PlaceOrder.css';

const PlaceOrder = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // Using useParams Hook for dynamic ID
    const { wineID } = useParams();
    // Using useAuth for Default Value
    const { user, isLoading } = useAuth();

    // State for Wine Details
    const [wineDetail, setWineDetail] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/wines/${wineID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setWineDetail(data));
    }, [wineID]);

    // State For Place Order
    const initialData = { clientName: user.displayName, clientEmail: user.email, clientPhone: '', clientAddress: '' };
    const [orderInfo, setOrderInfo] = useState(initialData);

    // Take Data On Blur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
    }
    // PlaceOrder Handler
    const handleOrder = e => {
        e.preventDefault();
        const orderData = {
            ...orderInfo,
            wineName: wineDetail.name,
            winePrice: wineDetail.price,
            wineImg: wineDetail.img,
            orderStatus: 'Pending'

        }
        // POSTING ORDER BY API
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('You Have placed an Order Successfully!!!');
                    e.target.reset();
                }

            })


    };
    return (
        <>
            <Navigation />
            <div className="placeorder-section py-5 text-start">
                <Container>
                    <div className="section-title">
                        <p>{glassIcon}</p>
                        <h2>Place Your Order</h2>
                    </div>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="wine-detail-inner-main">
                                <div className="wine-detail-img">
                                    <img src={wineDetail.img} alt="PACKAGEIMAGE" />
                                </div>
                                <div className="wine-detail-inner mt-4">
                                    <div className="wine-detail-title">
                                        <h2>{wineDetail.name}</h2>
                                    </div>
                                    <div className="wine-detail-overview">
                                        <h3>Price: <span style={{ color: '#c02323' }}>${wineDetail.price}</span></h3>
                                        <p><strong>Details:</strong><br />
                                            {wineDetail.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="order-form">
                                <h2 className='text-center text-uppercase'>Details For Order</h2>
                                {/* Registration Form Area */}
                                {!isLoading ? <form onSubmit={handleOrder} className='my-5 placeOrder-form'>
                                    <input type="text" onBlur={handleOnBlur} defaultValue={user.displayName} name="clientName" id="name" placeholder='Type your name...' required />
                                    <input type="email" onBlur={handleOnBlur} defaultValue={user.email} name="clientEmail" id="email" placeholder='Type your email...' required />
                                    <input type="text" onBlur={handleOnBlur} name="clientAddress" id="address" placeholder='Type your address...' required />
                                    <input type="number" onBlur={handleOnBlur} name="clientPhone" id="phone" placeholder='Type your phone...' required />
                                    <button type="submit">Place Order</button>

                                </form> : <Spinner animation="grow" />}
                                <Link to="/allwines" className="explore-btn text-center mb-5"
                                    style={{ width: '90%', color: '#c02323', margin: 'auto', display: 'block' }}>Explore More Wines</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />

        </>
    );
};

export default PlaceOrder;