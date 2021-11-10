import React, { useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // Using Use Auth For Login
    const { user, isLoading, authError, loginWithEmail, googleSignIn } = useAuth();
    // Location Hook and History Hook For Redirection
    const location = useLocation();
    const history = useHistory();
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />

    // Using State for Login Data
    const [loginData, setLoginData] = useState({});
    // Getting Value with On Change
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // Login Function
    const handleLogin = e => {
        e.preventDefault();
        loginWithEmail(loginData.email, loginData.password, location, history);
    }

    // Google Sign In function
    const handleGoogleSignin = () => {
        googleSignIn(location, history);
    }
    return (
        <>
            <div className="register-form-section pt-5">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="register-form-img">
                                <img src="https://i.ibb.co/JC99bSS/register-form-img.png" alt="" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="register-form-inner pt-5 pb-4">
                                <div className="section-title">
                                    <p>{glassIcon}</p>
                                    <h2>Login Here</h2>
                                </div>
                                {/* Registration Form Area */}
                                {!isLoading ? <form onSubmit={handleLogin} className='signUpForm mt-5 mb-2'>
                                    <input type="email" onChange={handleOnChange} name="email" id="email" placeholder='Type your email...' required />
                                    <input type="password" onChange={handleOnChange} name="password" id="pass" placeholder='Type your password...' required />
                                    <button type="submit">Login</button>
                                    <p className='already-have-ac-txt'>Don't have an account? <Link to='/register'>Register Here</Link> </p>
                                </form> : <Spinner style={{ display: 'block', margin: '0 auto' }} animation="grow" />}
                                {user?.email && <Alert variant='success'>You Have Registered Successfully!!!</Alert>}
                                {authError && <Alert variant='danger'>{authError}</Alert>}
                                <button onClick={handleGoogleSignin} className='gSignin-btn'>{googleIcon} Google Sign-in</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;