import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Experts.css';
import { Link } from 'react-router-dom';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';


const Experts = () => {
    // Font Awesome Icons
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitIcon = <FontAwesomeIcon icon={faTwitter} />
    const pintrstIcon = <FontAwesomeIcon icon={faPinterest} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />

    return (
        <>
            {/* Team Area Starts */}
            <div className="team-section py-5">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Our Experts</h2>
                </div>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src='https://i.ibb.co/wBgxxfD/expert01.png' alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Robert Pineda</h3>
                                    <p>Winemaker</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src='https://i.ibb.co/p1G0G2N/expert02.png' alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>John Wick</h3>
                                    <p>Executive</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src='https://i.ibb.co/k1Xbp2S/expert03.png' alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Marry Janes</h3>
                                    <p>Manager</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src='https://i.ibb.co/N7S1Hdr/expert04.png' alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Simon Dominic</h3>
                                    <p>CEO</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Experts;