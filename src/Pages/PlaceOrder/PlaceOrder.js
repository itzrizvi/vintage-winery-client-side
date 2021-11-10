import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
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
    const { user } = useAuth();

    // State for Wine Details
    const [wineDetail, setWineDetail] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/wines/${wineID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setWineDetail(data));
    }, [wineID]);
    // USING HOOK FORM
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // PlaceOrder Handler
    const onSubmit = data => { };
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
                            <div className="wine-detail-img">
                                <img src={wineDetail.img} alt="PACKAGEIMAGE" />
                            </div>
                            <div className="wine-detail-inner mt-4">
                                <div className="wine-detail-title">
                                    <h2>{wineDetail.name}</h2>
                                </div>
                                <div className="wine-detail-overview">
                                    <h3>Price: ${wineDetail.price}</h3>
                                    <p><strong>Details:</strong><br />
                                        {wineDetail.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="order-form">
                                <h2 className='text-center text-uppercase'>Details For Order</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {errors.fullName && <span style={{ display: 'block', textAlign: 'center', color: '#FFFFFF', fontWeight: '600' }}>Name field is required</span>}
                                    <input {...register("fullName", { required: true })} defaultValue={user.displayName} placeholder='Full Name...' />
                                    {errors.email && <span style={{ display: 'block', textAlign: 'center', color: '#FFFFFF', fontWeight: '600' }}>Email field is required</span>}
                                    <input {...register("email", { required: true })} defaultValue={user.email} placeholder='Email...' />
                                    {errors.address && <span style={{ display: 'block', textAlign: 'center', color: '#FFFFFF', fontWeight: '600' }}>Address field is required</span>}
                                    <input {...register("address", { required: true })} placeholder='Address...' />
                                    {errors.phone && <span style={{ display: 'block', textAlign: 'center', color: '#FFFFFF', fontWeight: '600' }}>Number field is required</span>}
                                    <input type="number" {...register("phone", { required: true })} placeholder='Phone...' />
                                    <input type="submit" value="Place Order" className='booktrip-btn' />
                                </form>
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