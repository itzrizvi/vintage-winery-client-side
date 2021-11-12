import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // State For All Orders For Admin
    const [allOrders, setAllOrders] = useState([]);
    // All Order Fetching for Admin
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allOrders]);
    return (
        <>
            <div className="manage-order-section py-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Manage Orders</h2>
                </div>
                <Container>
                    <Row>
                        {
                            allOrders.map(singleOrder => <ManageSingleOrder
                                key={singleOrder._id}
                                allOrders={allOrders}
                                singleOrder={singleOrder}></ManageSingleOrder>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ManageAllOrders;