import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = () => {
    // FontAwesome Icons
    const clockIcon = <FontAwesomeIcon icon={faClock} />;
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />;

    // Active Style for Menu
    const activeLink = {
        borderBottom: '1px solid #c02323',
        color: '#FFFFFF'
    }
    return (
        <>
            <header className='head-main'>
                <div className="top-bar">
                    <Container fluid>
                        <Row>
                            <Col md={7} sm={12} xs={12}>
                                <div className="top-bar-left-inner">
                                    <ul className="schedule-list d-flex">
                                        <li><span>{clockIcon}</span> Mon - Sat: 9.30am To 10.00pm</li>
                                        <li><span>{envIcon}</span> info@vintagewinery.com</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={5} sm={12} xs={12}>
                                <div className="top-bar-right-inner">
                                    {/* {user?.email && <Link to='/home'>
                                        <img src={user?.photoURL} alt="USERPHOTO" /></Link>} */}
                                    {/* {user?.email && <Link to='/home'>{user?.displayName}</Link>} */}

                                    <button className='before-effect'>Logout</button>
                                    <Link to='/login' className='before-effect'>Login</Link>
                                    <Link to='/register' className='before-effect'>Register</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="nav-menu-area">
                    <Container>
                        <div className="menu-inner">
                            <Row>
                                <Navbar variant="light" collapseOnSelect expand="md">
                                    <Navbar.Brand as={Link} to="/home">
                                        <div className="logo">
                                            <h2><span>Vintage</span> Winery</h2>
                                        </div>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className='justify-content-end nav-menu'>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/home">Home</Nav.Link>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/allwines">All Wines</Nav.Link>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Row>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
};

export default Navigation;