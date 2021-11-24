import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // Destructure Firebase Functions through USE AUTH HOOK
    const { registerNewUser, isLoading, authError } = useAuth();
    // Navigate Hook for redirecting
    const navigate = useNavigate();
    // STATE FOR Register DATA 
    const [registerData, setRegisterData] = useState({});
    // State for Success Message
    const [registerSuccess, setRegisterSuccess] = useState(false);
    // Setting values from form to state
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    // Registration Handle Function
    const handleRegistration = e => {
        e.preventDefault();
        if (registerData.password !== registerData.passwordTwo) {
            alert('Your Password Didn\'t Matched');
            return;
        }

        registerNewUser(registerData.email, registerData.password, registerData.name, navigate);
        setRegisterSuccess(true);
    }
    return (
        <>
            <div className="register-form-section pt-5">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="register-form-inner">
                                <div className="section-title">
                                    <p>{glassIcon}</p>
                                    <h2>Register Here</h2>
                                </div>
                                {/* Registration Form Area */}
                                {!isLoading ? <form onSubmit={handleRegistration} className='signUpForm my-5'>
                                    <input type="text" onBlur={handleOnBlur} name="name" id="name" placeholder='Type your name...' required />
                                    <input type="email" onBlur={handleOnBlur} name="email" id="email" placeholder='Type your email...' required />
                                    <input type="password" onBlur={handleOnBlur} name="password" id="pass" placeholder='Type your password...' required />
                                    <input type="password" onBlur={handleOnBlur} name="passwordTwo" id="pass" placeholder='Re-Type your password...' required />
                                    <button type="submit">Register</button>
                                    <p className='already-have-ac-txt'>Already have an account? <Link to='/login'>Login Here</Link> </p>
                                </form> : <Spinner animation="grow" />}
                                {registerSuccess && <Alert variant='success'>You Have Registered Successfully!!!</Alert>}
                                {authError && <Alert variant='danger'>{authError}</Alert>}
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="register-form-img">
                                <img src="https://i.ibb.co/JC99bSS/register-form-img.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Register;