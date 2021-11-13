import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MySingleOrder.css';

const MySingleOrder = ({ userOrder, setOrders, allOrders }) => {
    // Destructuring Data
    const { wineName, winePrice, wineImg, orderStatus, _id } = userOrder;
    // Order Cancel Handler
    const handleCancelOrder = id => {
        const confirmation = window.confirm('Are you sure you want to delete this order???');
        if (confirmation) {
            const url = `https://fierce-forest-71065.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order is Deleted Successfully!!!');
                        const restOrders = allOrders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                });
        }
    }
    return (
        <Col md={12} sm={12} xs={12}>
            <div className="single-user-order-inner">
                <Row>
                    <Col md={4} sm={4} xs={4}>
                        <div className="single-user-order-img text-start">
                            <img src={wineImg} alt="WINEIMG" />
                        </div>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <div className="single-user-order-details text-end">
                            <h3>{wineName}</h3>
                            <h4>Price: <span>${winePrice}</span></h4>
                            <p>Order Status: <span>{orderStatus}</span></p>
                            <button onClick={() => handleCancelOrder(_id)} className="cancel-order-btn">Cancel Order</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default MySingleOrder;