import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ManageSingleOrder.css';

const ManageSingleOrder = ({ singleOrder, allOrders, setAllOrders }) => {
    // Destructuring Order Data
    const { clientName, clientEmail, wineName, winePrice, wineImg, orderStatus, _id } = singleOrder;

    // Order Status Change Function
    const handleStatus = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singleOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('This Order Marked as Shipped Successfully!!!');
                }
            })
    }

    // Order Delete Function for Admin
    const handleDeleteOrder = id => {
        const confirmation = window.confirm('Are you sure you want to delete this order???');
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order is Deleted Successfully!!!');
                        const restOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(restOrders);
                    }
                });
        }
    }
    return (
        <Col md={4} sm={6} xs={12} className="mb-4">
            <div className="manage-single-order-inner text-start">
                <Row>
                    <Col md={6} sm={6} xs={12}>
                        <div className="manage-single-img">
                            <img src={wineImg} alt="WINEIMG" />
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <button onClick={() => handleStatus(_id)} className="shipped-btn">Mark As Shipped</button>

                    </Col>
                </Row>

                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <div className="clientdetails">
                            <h4>{wineName}</h4>
                            <h4>Prcie: <span>${winePrice}</span></h4>
                            <p>Client Name: {clientName}</p>
                            <p>Client Email: {clientEmail}</p>
                            <p>Order Status: {orderStatus}</p>
                            <button onClick={() => handleDeleteOrder(_id)} className="dlt-order-btn">Delete This Order</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default ManageSingleOrder;