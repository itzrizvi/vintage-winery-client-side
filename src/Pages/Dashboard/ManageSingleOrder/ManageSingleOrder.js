import React from 'react';
import { Col } from 'react-bootstrap';
import './ManageSingleOrder.css';

const ManageSingleOrder = ({ singleOrder, allOrders }) => {
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
        console.log(id)
    }
    return (
        <Col md={4} sm={6} xs={12} className="mb-4">
            <div className="manage-single-order-inner text-start">
                <div className="manage-single-img">
                    <img src={wineImg} alt="WINEIMG" />
                </div>
                <div className="clientdetails">
                    <h4>{wineName}</h4>
                    <h4>Prcie: {winePrice}</h4>
                    <p>Client Name: {clientName}</p>
                    <p>Client Email: {clientEmail}</p>
                    <p>Order Status: {orderStatus}</p>
                    <button onClick={() => handleStatus(_id)} className="shipped-btn">Mark As Shipped</button>
                    <button onClick={() => handleDeleteOrder(_id)} className="dlt-order-btn">Delete This Order</button>
                </div>
            </div>
        </Col>
    );
};

export default ManageSingleOrder;