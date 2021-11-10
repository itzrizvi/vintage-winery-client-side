import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
    // FontAwesome Icons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />;
    return (
        <>
            <div className="about-section py-5 mt-4 mb-4">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>About Us</h2>
                </div>
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="about-img">
                                <img src='https://i.ibb.co/jLd1my2/homepage145.png' alt="" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="about-details">
                                <h2>Welcome To Vintage Winery</h2>
                                <p>A New Generation of Vintage Winery. Our winery is a building or property that produces wine, or a business involved in the production of wine, such as a wine company. Besides wine making equipment, larger wineries may also feature warehouses, bottling lines, laboratories, and large expanses of tanks known as tank farms.
                                    The earliest known evidence of winemaking at a relatively large scale, if not evidence of actual wineries, has been found in the Middle East.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;