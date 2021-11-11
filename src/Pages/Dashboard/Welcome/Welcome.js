import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Welcome.css';

const Welcome = () => {
    // Using Use Auth For User
    const { user } = useAuth();
    return (
        <div className='dashboard-custom-body py-5'>
            <Container>
                <Row>
                    <Col md={12} sm={12} xs={12} className="py-5">
                        <div className="welcome-inner">
                            <h2>Hi, {user.displayName}!!</h2>
                            {user?.photoURL && <img src={user.photoURL} alt="" />}
                            <h3>Welcome To <span>Vintage</span> Winery</h3>
                            <p>This is Your Dashboard and you can handle your orders and
                                others features here. You can let us know about our service
                                providing policy and your satisfaction or disatisfaction.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;