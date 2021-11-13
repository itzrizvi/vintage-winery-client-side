import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    return (
        <>
            <Navigation />
            <div className="not-found-section py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <p>{glassIcon}</p>
                                <h2>404 not found</h2>
                            </div>
                            <img className='img-fluid' src="https://i.ibb.co/GdLthrb/notfound-img.png" alt="NOTFOUND" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;