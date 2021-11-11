import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Payments.css';

const Payments = () => {
    return (
        <>
            <div className="payment-section py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="payment-inner">
                                <h2>Payment System Is Coming Soon...</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Payments;