import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './GiveReview.css';
import { useForm } from 'react-hook-form';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const GiveReview = () => {
    // Using useAuth
    const { user } = useAuth();
    // Fontawesome ICons
    const glassIcon = <FontAwesomeIcon icon={faGlassCheers} />
    //USING HOOK FORM
    const { register, handleSubmit, reset } = useForm();
    // State for confirmation message
    const [rated, setRated] = useState(false);

    // Review Handler Function
    const handleReview = (data) => {
        fetch('https://fierce-forest-71065.herokuapp.com/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setRated(true);
                    reset();

                }
            })
    }
    return (
        <>
            <div className="give-review-section py-2">
                <div className="section-title">
                    <p>{glassIcon}</p>
                    <h2>Write a review</h2>
                </div>
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="rating-form-inner">
                                {rated && <Alert className='text-center' variant='success'>You Have Rated Vintage Winery Successfully!!!</Alert>}
                                <form onSubmit={handleSubmit(handleReview)}>
                                    <input {...register("name")} defaultValue={user.displayName} placeholder='Type your name...' required />
                                    <textarea {...register("writtenRating")} placeholder='Write about our service and wines...' />
                                    <input {...register("rating")} type='number' placeholder='Rate us out of 5...' required />
                                    <input type="submit" value="Rate Now" className='rate-now-btn' />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default GiveReview;