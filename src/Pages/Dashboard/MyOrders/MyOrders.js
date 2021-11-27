import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // Using useAuth
    const { user, token } = useAuth();
    // State For Orders of Logged In User
    const [orders, setOrders] = useState([]);
    // Fetch orders by dynamic param user email
    useEffect(() => {
        fetch(`https://fierce-forest-71065.herokuapp.com/orders/${user.email}`, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])
    return (
        <>
            <div className="manage-order-section py-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>My Orders</h2>
                </div>
                <Container>
                    <Row>
                        {
                            orders.map(userOrder => <MySingleOrder
                                key={userOrder._id}
                                allOrders={orders}
                                setOrders={setOrders}
                                userOrder={userOrder}></MySingleOrder>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MyOrders;