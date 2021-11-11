import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './MakeAdmin.css';

const MakeAdmin = () => {
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    // State For Getting Email for making admin
    const [email, setEmail] = useState('');
    // State For Success Message
    const [adminAdded, setAdminAdded] = useState(false);
    // On Blur Hanlder
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    // Admin Form Handler
    const handleAdminForm = e => {
        e.preventDefault();
        // Fetching for admin role
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminAdded(true);
                    e.target.reset();
                };
            })
    }

    return (
        <>
            <div className="make-admin-section">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Make an Admin</h2>
                </div>
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="makeadmin-form-inner">
                                <form onSubmit={handleAdminForm}>
                                    <input
                                        onBlur={handleOnBlur}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder='Type an email...'
                                        required />
                                    <Button type="submit">Make Admin</Button>
                                </form>
                                {adminAdded && <Alert variant='success'>You Have Made an Admin Successfully!!!</Alert>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MakeAdmin;